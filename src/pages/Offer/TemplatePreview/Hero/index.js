import React from "react";
import * as S from "./styled";

const HeroSection = ({ title, subtitle, price }) => {
  return (
    <S.Hero>
      <S.HeroContent>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        {price && (
          <S.PriceTag>
            <span>{price}</span>
          </S.PriceTag>
        )}
      </S.HeroContent>
    </S.Hero>
  );
};

export default HeroSection;
