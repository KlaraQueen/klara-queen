import React from "react";
import * as S from "./styled";
import { aboutHero, aboutSectionTitles } from "../../../data/aboutData";

const CTA = () => (
  <S.CTASection>
    <S.CTAText>{aboutSectionTitles.cta}</S.CTAText>
  </S.CTASection>
);

export default CTA;
