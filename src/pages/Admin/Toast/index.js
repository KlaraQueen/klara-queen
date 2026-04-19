import React from "react";
import * as S from "./styled";

export default function Toast({ message, error }) {
  if (!message) return null;

  return <S.Wrapper $error={error}>{message}</S.Wrapper>;
}
