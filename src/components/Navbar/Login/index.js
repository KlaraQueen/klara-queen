import React from "react";
import { useAuth } from "../../../context/AuthContext";
import * as S from "./styled";

function Login({ variant }) {
  const { user, loading, signOutUser } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return null;
  }

  return (
    <S.LogoutBtn type="button" onClick={() => signOutUser()}>
      Wyloguj
    </S.LogoutBtn>
  );
}

export default Login;
