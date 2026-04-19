import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import * as S from "./styled";

const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL;

function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <S.LoadingWrapper>Ładowanie…</S.LoadingWrapper>;
  }

  if (!user || user.email !== ADMIN_EMAIL) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
