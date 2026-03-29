import React from "react";
import * as S from "./styled";

const FeaturesSection = ({ features }) => {
  return (
    <S.FeaturesSection>
      <S.FeaturesTitle>Co się zawiera:</S.FeaturesTitle>
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

export default FeaturesSection;
