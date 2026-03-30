import React from "react";
import * as S from "./styled";
import Hero from "./Hero";
import Manifesto from "./Manifesto";
import FAQ from "./FAQ";
import Stats from "./Stats";
import CTA from "./CTA";
import Social from "./Social";
import { aboutSectionTitles } from "../../data/aboutData";

const About = () => {
  return (
    <S.PageContainer>
      <Hero />

      <S.SectionDivider />

      <S.SectionContainer>
        <S.SectionTitle>{aboutSectionTitles.manifesto}</S.SectionTitle>
        <S.ContentWrapper>
          <Manifesto />
        </S.ContentWrapper>
      </S.SectionContainer>

      <S.SectionDivider />

      <S.SectionContainer>
        <S.SectionTitle>{aboutSectionTitles.stats}</S.SectionTitle>
        <S.ContentWrapper style={{ maxWidth: "1000px" }}>
          <Stats />
        </S.ContentWrapper>
      </S.SectionContainer>

      <S.SectionDivider />

      <S.SectionContainer>
        <S.SectionTitle>{aboutSectionTitles.faq}</S.SectionTitle>
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
