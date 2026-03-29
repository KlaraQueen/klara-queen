import React from "react";
import * as S from "./styled";
import { aboutHero } from "../../../data/aboutData";

const Hero = () => (
  <S.HeroSection>
    <S.HeroTitle>{aboutHero.title}</S.HeroTitle>
    <S.HeroSubtitle>{aboutHero.subtitle}</S.HeroSubtitle>
  </S.HeroSection>
);

export default Hero;
