import React from "react";
import * as S from "./styled";

function Hero() {
  return (
    <S.HeroWrapper>
      <S.HeroOverline>Unikalny design, który zachwyca</S.HeroOverline>

      <S.HeroTitle>
        Luksusowe i funkcjonalne
        <br />
        strony WWW dla Twojej marki
      </S.HeroTitle>

      <S.HeroDescription>
        Projektujemy spersonalizowane, unikalne rozwiązania cyfrowe,
        <br />
        które budują autorytet i przyciągają klientów premium.
      </S.HeroDescription>

      <S.Actions>
        <S.PrimaryButton href="#projekty">Zobacz Projekty</S.PrimaryButton>
        <S.SecondaryButton href="#oferta">Poznaj Ofertę</S.SecondaryButton>
      </S.Actions>
    </S.HeroWrapper>
  );
}

export default Hero;
