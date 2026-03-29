import React from "react";
import * as S from "./styled";
import Hero from "./Hero";
import Manifesto from "./Manifesto";
import FAQ from "./FAQ";
import Stats from "./Stats";
import CTA from "./CTA";
import Social from "./Social";

const About = () => {
  return (
    <S.PageContainer>
      <Hero />

      <S.SectionDivider />

      <S.SectionContainer>
        <S.SectionTitle>Twoja Kolekcja</S.SectionTitle>
        <S.ContentWrapper>
          <Manifesto />
        </S.ContentWrapper>
      </S.SectionContainer>

      <S.SectionDivider />

      <S.SectionContainer>
        <S.SectionTitle>Twoje Atuty</S.SectionTitle>
        <S.ContentWrapper style={{ maxWidth: "1000px" }}>
          <Stats />
        </S.ContentWrapper>
      </S.SectionContainer>

      <S.SectionDivider />

      <S.SectionContainer>
        <S.SectionTitle>Jak To Działa?</S.SectionTitle>
        <S.ContentWrapper>
          <FAQ />
        </S.ContentWrapper>
      </S.SectionContainer>

      <S.SectionDivider />

      <Social />

      <S.SectionDivider />

      <CTA />
    </S.PageContainer>
  );
};

export default About;
