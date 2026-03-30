import React from "react";
import * as S from "./styled";
import { logoData } from "../../../data/logoData";

function Logo() {
  return (
    <S.LogoLink to="/" aria-label={logoData.ariaLabel}>
      <S.LogoImage />
    </S.LogoLink>
  );
}

export default Logo;
