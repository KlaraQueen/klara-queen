import React from "react";
import { FaLock } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import { isAdminUser } from "../../../constants/admin";
import * as S from "./styled";

function Login({ variant }) {
  const { user, loading, signOutUser } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return null;
  }

  if (isAdminUser(user)) {
    if (variant === "drawer") {
      return (
        <S.AccountWrap>
          <S.AccountLink to="/admin" aria-label="Panel administracyjny">
            <S.LockIcon>
              <FaLock />
            </S.LockIcon>
            <S.LoginText>Panel</S.LoginText>
          </S.AccountLink>
          <S.LogoutBtn type="button" onClick={() => signOutUser()}>
            Wyloguj
          </S.LogoutBtn>
        </S.AccountWrap>
      );
    }
    return (
      <S.AccountLink to="/admin" aria-label="Panel administracyjny">
        <S.LockIcon>
          <FaLock />
        </S.LockIcon>
        <S.LoginText>Panel</S.LoginText>
      </S.AccountLink>
    );
  }

  return (
    <S.LogoutBtn type="button" onClick={() => signOutUser()}>
      Wyloguj
    </S.LogoutBtn>
  );
}

export default Login;
