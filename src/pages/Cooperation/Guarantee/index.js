import React from "react";
import * as S from "./styled";
import { cooperationData } from "../../../data/cooperationData";

const Guarantee = () => {
  return (
    <S.GuaranteeSection>
      <S.GuaranteeTitle>{cooperationData.guarantee.title}</S.GuaranteeTitle>
      <S.GuaranteeSubtitle>
        {cooperationData.guarantee.subtitle}
      </S.GuaranteeSubtitle>
      <S.GuaranteeDescription>
        {cooperationData.guarantee.description}
      </S.GuaranteeDescription>

      <S.BenefitsGrid>
        {cooperationData.guarantee.benefits.map((benefit, index) => (
          <S.BenefitCard key={index}>
            <S.BenefitIcon>{benefit.icon}</S.BenefitIcon>
            <S.BenefitTitle>{benefit.title}</S.BenefitTitle>
            <S.BenefitDescription>{benefit.description}</S.BenefitDescription>
          </S.BenefitCard>
        ))}
      </S.BenefitsGrid>
    </S.GuaranteeSection>
  );
};

export default Guarantee;
