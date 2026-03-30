import React from "react";
import * as S from "./styled";
import { heroData } from "../../../data/heroData";

function Hero() {
  return (
    <S.HeroWrapper>
      <S.HeroOverline>{heroData.overline}</S.HeroOverline>

      <S.HeroTitle>
        {heroData.title.line1}
        <br />
        {heroData.title.line2}
      </S.HeroTitle>

      <S.HeroDescription>
        {heroData.description.line1}
        <br />
        {heroData.description.line2}
      </S.HeroDescription>

      <S.Actions>
        <S.PrimaryButton href={heroData.buttons.primary.href}>
          {heroData.buttons.primary.label}
        </S.PrimaryButton>
        <S.SecondaryButton href={heroData.buttons.secondary.href}>
          {heroData.buttons.secondary.label}
        </S.SecondaryButton>
      </S.Actions>
    </S.HeroWrapper>
  );
}

export default Hero;
