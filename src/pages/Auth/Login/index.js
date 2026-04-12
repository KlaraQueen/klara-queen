import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as S from "../styled";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <S.AuthTitle>Zaloguj się</S.AuthTitle>
          <S.AuthSubtitle>
            Wpisz e-mail i hasło — wkrótce połączymy to z Firebase.
          </S.AuthSubtitle>
        </S.AuthHeader>

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

          <S.RowBetween>
            <S.RouterLink to="/forgot-password">Nie pamiętasz hasła?</S.RouterLink>
          </S.RowBetween>

          <S.PrimaryButton type="submit">Zaloguj się</S.PrimaryButton>
        </S.AuthForm>

        <S.Divider>lub</S.Divider>

        <S.GoogleButton type="button" onClick={handleGoogle}>
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
