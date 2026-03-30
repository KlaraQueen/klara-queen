import React from "react";
import * as S from "./styled";
import { logoData } from "../../../data/logoData";

function Brand({ data }) {
  return (
    <S.BrandColumn>
      <S.LogoWrapper>
        <S.LogoImage src={logoData.src} alt={logoData.alt} />
      </S.LogoWrapper>
      <S.BrandDescription>{data.description}</S.BrandDescription>
    </S.BrandColumn>
  );
}

export default Brand;
