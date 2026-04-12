import React, { useState } from "react";
import * as S from "../styled";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <S.AuthPage>
      <S.AuthCard>
        <S.AuthHeader>
          <S.AuthTitle>Przypomnienie hasła</S.AuthTitle>
          <S.AuthSubtitle>
            Wyślemy link resetujący na podany adres — po integracji z
            Firebase.
          </S.AuthSubtitle>
        </S.AuthHeader>

        {sent ? (
          <S.AuthNote>
            Gdy Firebase będzie aktywne, na <strong>{email || "…"}</strong>{" "}
            trafi wiadomość z instrukcją. Na razie to tylko podgląd UI.
          </S.AuthNote>
        ) : null}

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
            />
          </S.Field>

          <S.PrimaryButton type="submit">Wyślij link</S.PrimaryButton>
        </S.AuthForm>

        <S.BackRow>
          <S.RouterLink to="/login">Wróć do logowania</S.RouterLink>
        </S.BackRow>
      </S.AuthCard>
    </S.AuthPage>
  );
}

export default ForgotPassword;
