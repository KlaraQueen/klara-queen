import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { isAdminUser } from "../../constants/admin";
import Login from "../../pages/Auth/Login";
import * as S from "./styled";

function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <S.LoadingWrapper>Ładowanie…</S.LoadingWrapper>;
  }

  if (!user) {
    return <Login />;
  }

  if (!isAdminUser(user)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
