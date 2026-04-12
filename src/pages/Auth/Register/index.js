import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as S from "../styled";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleGoogle = () => {
  };

  return (
    <S.AuthPage>
      <S.AuthCard>
        <S.AuthHeader>
          <S.AuthTitle>Rejestracja</S.AuthTitle>
          <S.AuthSubtitle>
            Utwórz konto — logika zapisu podłączymy pod Firebase.
          </S.AuthSubtitle>
        </S.AuthHeader>

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
              />
              <S.TogglePassword
                type="button"
                aria-label={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
                onClick={() => setShowPassword((v) => !v)}
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
            />
          </S.Field>

          <S.PrimaryButton type="submit">Utwórz konto</S.PrimaryButton>
        </S.AuthForm>

        <S.Divider>lub</S.Divider>

        <S.GoogleButton type="button" onClick={handleGoogle}>
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
