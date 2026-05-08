import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth, googleProvider } from "../../../firebase";
import { isFirebaseConfigReady } from "../../../firebase/config";
import { isAdminUser } from "../../../constants/admin";
import { mapFirebaseAuthError } from "../../../utils/mapFirebaseAuthError";
import * as S from "../styled";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigateAfterAuth = (firebaseUser) => {
    if (!firebaseUser) {
      navigate("/", { replace: true });
      return;
    }
    if (isAdminUser(firebaseUser)) {
      navigate("/admin", { replace: true });
      return;
    }
    navigate("/", { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!isFirebaseConfigReady() || !auth) {
      setError(
        "Brak konfiguracji Firebase — uzupełnij plik .env.local (patrz .env.example).",
      );
      return;
    }
    if (!email.trim() || !password) {
      setError("Podaj adres e-mail i hasło.");
      return;
    }
    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );
      navigateAfterAuth(cred.user);
    } catch (err) {
      setError(mapFirebaseAuthError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    if (!isFirebaseConfigReady() || !auth) {
      setError(
        "Brak konfiguracji Firebase — uzupełnij plik .env.local (patrz .env.example).",
      );
      return;
    }
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigateAfterAuth(result.user);
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        return;
      }
      setError(mapFirebaseAuthError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.AuthPage>
      <S.AuthCard>
        <S.AuthHeader>
          <S.AuthTitle>Zaloguj się</S.AuthTitle>
          <S.AuthSubtitle>
            Adres panelu wejściowego: /panel-wejscie — zapisz go w zakładkach (stary
            adres /login przekierowuje tu). Logowanie nie jest prowadzone z menu
            strony głównej.
          </S.AuthSubtitle>
        </S.AuthHeader>

        {error ? <S.AuthError role="alert">{error}</S.AuthError> : null}

        <S.AuthForm onSubmit={handleSubmit} noValidate>
          <S.Field>
            <S.Label htmlFor="login-email">E-mail</S.Label>
            <S.Input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="twoj@email.pl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </S.Field>

          <S.Field>
            <S.Label htmlFor="login-password">Hasło</S.Label>
            <S.PasswordWrap>
              <S.PasswordInput
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <S.TogglePassword
                type="button"
                aria-label={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
                onClick={() => setShowPassword((v) => !v)}
                disabled={loading}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </S.TogglePassword>
            </S.PasswordWrap>
          </S.Field>

          <S.PrimaryButton type="submit" disabled={loading}>
            {loading ? "Logowanie…" : "Zaloguj się"}
          </S.PrimaryButton>
        </S.AuthForm>

        <S.Divider>lub</S.Divider>

        <S.GoogleButton type="button" onClick={handleGoogle} disabled={loading}>
          <FcGoogle aria-hidden />
          Kontynuuj z Google
        </S.GoogleButton>
      </S.AuthCard>
    </S.AuthPage>
  );
}

export default Login;
