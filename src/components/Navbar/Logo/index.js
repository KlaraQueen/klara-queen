import React from "react";
import * as S from "./styled";

function Logo() {
  return (
    <S.LogoLink to="/" aria-label="Strona główna Klara Queen">
      <S.LogoImage />
    </S.LogoLink>
  );
}

export default Logo;
