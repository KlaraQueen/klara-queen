import React from "react";
import * as S from "./styled";
import logoImg from "../../../image/znak-wodny.png";

function Brand({ data }) {
  return (
    <S.BrandColumn>
      <S.LogoWrapper>
        <S.LogoImage src={logoImg} alt={data.name} />
      </S.LogoWrapper>
      <S.BrandDescription>{data.description}</S.BrandDescription>
    </S.BrandColumn>
  );
}

export default Brand;
