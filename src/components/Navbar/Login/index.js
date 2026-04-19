import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import * as S from "./styled";

function Login({ variant }) {
  const { user, loading, signOutUser } = useAuth();

  if (loading) {
    return (
      <S.LoginButton as={Link} to="/login" aria-label="Logowanie">
        <S.LockIcon>
          <FaLock />
        </S.LockIcon>
        <S.LoginText>Logowanie</S.LoginText>
      </S.LoginButton>
    );
  }

  if (user) {
    if (variant === "drawer") {
      return (
        <S.AccountWrap>
          <S.AccountLink to="/konto" aria-label="Moje konto">
            <S.LockIcon>
              <FaUser />
            </S.LockIcon>
            <S.LoginText>Konto</S.LoginText>
          </S.AccountLink>
          <S.LogoutBtn type="button" onClick={() => signOutUser()}>
            Wyloguj
          </S.LogoutBtn>
        </S.AccountWrap>
      );
    }
    return (
      <S.AccountLink to="/konto" aria-label="Moje konto">
        <S.LockIcon>
          <FaUser />
        </S.LockIcon>
        <S.LoginText>Konto</S.LoginText>
      </S.AccountLink>
    );
  }

  return (
    <S.LoginButton as={Link} to="/login" aria-label="Zaloguj się">
      <S.LockIcon>
        <FaLock />
      </S.LockIcon>
      <S.LoginText>Logowanie</S.LoginText>
    </S.LoginButton>
  );
}

export default Login;
