import React from "react";
import * as S from "./styled";
import { SectionTitle } from "../shared/styled";

const FeaturesComponent = ({ title, features }) => {
  return (
    <S.FeaturesSection>
      <SectionTitle>{title}</SectionTitle>
      <S.FeaturesList>
        {features.map((feature, idx) => (
          <S.FeatureItem key={idx}>
            <S.FeatureCheckmark>✓</S.FeatureCheckmark>
            <span>{feature}</span>
          </S.FeatureItem>
        ))}
      </S.FeaturesList>
    </S.FeaturesSection>
  );
};

export default FeaturesComponent;
