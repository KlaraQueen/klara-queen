import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth, googleProvider } from "../../../firebase";
import { isFirebaseConfigReady } from "../../../firebase/config";
import { mapFirebaseAuthError } from "../../../utils/mapFirebaseAuthError";
import * as S from "../styled";

const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      navigate(cred.user.email === ADMIN_EMAIL ? "/admin" : "/konto", {
        replace: true,
      });
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
      navigate(result.user.email === ADMIN_EMAIL ? "/admin" : "/konto", {
        replace: true,
      });
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
            Zaloguj się e-mailem i hasłem albo kontem Google.
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

          <S.RowBetween>
            <S.RouterLink to="/forgot-password">
              Nie pamiętasz hasła?
            </S.RouterLink>
          </S.RowBetween>

          <S.PrimaryButton type="submit" disabled={loading}>
            {loading ? "Logowanie…" : "Zaloguj się"}
          </S.PrimaryButton>
        </S.AuthForm>

        <S.Divider>lub</S.Divider>

        <S.GoogleButton type="button" onClick={handleGoogle} disabled={loading}>
          <FcGoogle aria-hidden />
          Kontynuuj z Google
        </S.GoogleButton>

        <S.AuthFooter>
          Nie masz konta?
          <S.RouterLink to="/register">Załóż konto</S.RouterLink>
        </S.AuthFooter>
      </S.AuthCard>
    </S.AuthPage>
  );
}

export default Login;
