import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";
import { isFirebaseConfigReady } from "../../../firebase/config";
import { mapFirebaseAuthError } from "../../../utils/mapFirebaseAuthError";
import * as S from "../styled";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
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
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setSent(true);
    } catch (err) {
      setError(mapFirebaseAuthError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.AuthPage>
      <S.AuthCard>
        <S.AuthHeader>
          <S.AuthTitle>Przypomnienie hasła</S.AuthTitle>
          <S.AuthSubtitle>
            Wyślemy link resetujący na Twój e-mail (jeśli konto istnieje).
          </S.AuthSubtitle>
        </S.AuthHeader>

        {error ? <S.AuthError role="alert">{error}</S.AuthError> : null}

        {sent ? (
          <S.AuthSuccess role="status">
            Jeśli konto jest powiązane z adresem <strong>{email.trim()}</strong>,
            wkrótce otrzymasz wiadomość z linkiem do ustawienia nowego hasła.
            Sprawdź też folder spam.
          </S.AuthSuccess>
        ) : null}

        {!sent ? (
          <S.AuthForm onSubmit={handleSubmit} noValidate>
            <S.Field>
              <S.Label htmlFor="forgot-email">E-mail</S.Label>
              <S.Input
                id="forgot-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="twoj@email.pl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </S.Field>

            <S.PrimaryButton type="submit" disabled={loading}>
              {loading ? "Wysyłanie…" : "Wyślij link"}
            </S.PrimaryButton>
          </S.AuthForm>
        ) : null}

        <S.BackRow>
          <S.RouterLink to="/login">Wróć do logowania</S.RouterLink>
        </S.BackRow>
      </S.AuthCard>
    </S.AuthPage>
  );
}

export default ForgotPassword;
