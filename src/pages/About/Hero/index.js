import React from "react";
import * as S from "./styled";

const aboutHero = {
  title: "Wymiar Luksusowej Doskonałości",
  subtitle:
    "Gdzie wizja spotyka precyzję. Tworzymy cyfrowe eksperyencje, które wyznaczają standardy branży.",
};

const Hero = () => (
  <S.HeroSection>
    <S.HeroTitle>{aboutHero.title}</S.HeroTitle>
    <S.HeroSubtitle>{aboutHero.subtitle}</S.HeroSubtitle>
  </S.HeroSection>
);

export default Hero;
