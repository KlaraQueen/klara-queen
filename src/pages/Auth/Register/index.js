import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth, googleProvider } from "../../../firebase";
import { isFirebaseConfigReady } from "../../../firebase/config";
import { mapFirebaseAuthError } from "../../../utils/mapFirebaseAuthError";
import * as S from "../styled";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!isFirebaseConfigReady() || !auth) {
      setError("Brak konfiguracji Firebase — uzupełnij plik .env.local (patrz .env.example).");
      return;
    }
    if (!email.trim()) {
      setError("Podaj adres e-mail.");
      return;
    }
    if (password.length < 6) {
      setError("Hasło musi mieć co najmniej 6 znaków.");
      return;
    }
    if (password !== confirm) {
      setError("Hasła nie są takie same.");
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      navigate("/", { replace: true });
    } catch (err) {
      setError(mapFirebaseAuthError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    if (!isFirebaseConfigReady() || !auth) {
      setError("Brak konfiguracji Firebase — uzupełnij plik .env.local (patrz .env.example).");
      return;
    }
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/", { replace: true });
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
          <S.AuthTitle>Rejestracja</S.AuthTitle>
          <S.AuthSubtitle>
            Załóż konto e-mailem lub zaloguj się jednorazowo przez Google.
          </S.AuthSubtitle>
        </S.AuthHeader>

        {error ? <S.AuthError role="alert">{error}</S.AuthError> : null}

        <S.AuthForm onSubmit={handleSubmit} noValidate>
          <S.Field>
            <S.Label htmlFor="register-email">E-mail</S.Label>
            <S.Input
              id="register-email"
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
            <S.Label htmlFor="register-password">Hasło</S.Label>
            <S.PasswordWrap>
              <S.PasswordInput
                id="register-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="min. 6 znaków"
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

          <S.Field>
            <S.Label htmlFor="register-confirm">Powtórz hasło</S.Label>
            <S.Input
              id="register-confirm"
              name="confirm"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="powtórz hasło"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              disabled={loading}
            />
          </S.Field>

          <S.PrimaryButton type="submit" disabled={loading}>
            {loading ? "Tworzenie konta…" : "Utwórz konto"}
          </S.PrimaryButton>
        </S.AuthForm>

        <S.Divider>lub</S.Divider>

        <S.GoogleButton type="button" onClick={handleGoogle} disabled={loading}>
          <FcGoogle aria-hidden />
          Zarejestruj się z Google
        </S.GoogleButton>

        <S.AuthFooter>
          Masz już konto?
          <S.RouterLink to="/login">Zaloguj się</S.RouterLink>
        </S.AuthFooter>
      </S.AuthCard>
    </S.AuthPage>
  );
}

export default Register;
