import React from "react";
import * as S from "./styled";
import { FaLock } from "react-icons/fa";

function Login() {
  return (
    <S.LoginButton href="/login" aria-label="Zaloguj się">
      <S.LockIcon>
        <FaLock />
      </S.LockIcon>
      <S.LoginText>Logowanie</S.LoginText>
    </S.LoginButton>
  );
}

export default Login;
