import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { cooperationData } from "../../data/cooperationData";

const Cooperation = () => {
  const navigate = useNavigate();

  return (
    <S.CooperationContainer>
      <S.CooperationContent>
        <S.CooperationHeader>
          <S.CooperationTitle>{cooperationData.hero.title}</S.CooperationTitle>
          <S.CooperationSubtitle>
            {cooperationData.hero.subtitle}
          </S.CooperationSubtitle>
        </S.CooperationHeader>

        <S.StepsContainer>
          {cooperationData.steps.map((step, index) => (
            <S.StepCard key={step.id} delay={index * 0.1}>
              <S.StepHeader>
                <S.StepNumber>{step.number}</S.StepNumber>
                <S.StepTitle>{step.title}</S.StepTitle>
              </S.StepHeader>
              <S.StepContent>
                <S.StepDescription>{step.content}</S.StepDescription>

                {step.options && (
                  <>
                    <S.OptionsList>
                      {step.options.map((option, idx) => (
                        <S.OptionItem key={idx}>
                          <S.OptionLabel>{option.label}</S.OptionLabel>
                          <S.OptionDescription>
                            {option.description}
                          </S.OptionDescription>
                        </S.OptionItem>
                      ))}
                    </S.OptionsList>
                    {step.note && (
                      <S.NoteBox>
                        <S.NoteLabel>Ważne</S.NoteLabel>
                        <S.NoteText>{step.note}</S.NoteText>
                      </S.NoteBox>
                    )}
                  </>
                )}

                {step.sections && (
                  <S.OptionsList>
                    {step.sections.map((section, idx) => (
                      <S.OptionItem key={idx}>
                        <S.OptionLabel>{section.label}</S.OptionLabel>
                        <S.OptionDescription>
                          {section.description}
                        </S.OptionDescription>
                      </S.OptionItem>
                    ))}
                  </S.OptionsList>
                )}

                {step.details && (
                  <S.OptionsList>
                    {step.details.map((detail, idx) => (
                      <S.OptionItem key={idx}>
                        <S.OptionLabel>{detail.label}</S.OptionLabel>
                        <S.OptionDescription>
                          {detail.description}
                        </S.OptionDescription>
                      </S.OptionItem>
                    ))}
                  </S.OptionsList>
                )}

                {step.deliverables && (
                  <S.BenefitsList>
                    {step.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </S.BenefitsList>
                )}
              </S.StepContent>
            </S.StepCard>
          ))}
        </S.StepsContainer>

        <S.MaterialsSection>
          <S.MaterialsTitle>{cooperationData.materials.title}</S.MaterialsTitle>
          <S.MaterialsSubtitle>
            {cooperationData.materials.subtitle}
          </S.MaterialsSubtitle>
          <S.MaterialsIntro>{cooperationData.materials.intro}</S.MaterialsIntro>

          <S.MaterialsSectionsGrid>
            {cooperationData.materials.sections.map((section, index) => (
              <S.MaterialCategory key={index} highlight={section.highlight}>
                <S.MaterialCategoryHeader>
                  <S.MaterialIcon>{section.icon}</S.MaterialIcon>
                  <S.MaterialCategoryTitle>
                    {section.title}
                  </S.MaterialCategoryTitle>
                </S.MaterialCategoryHeader>

                <S.MaterialItemsList>
                  {section.items.map((item, itemIdx) => (
                    <S.MaterialItem key={itemIdx}>
                      <S.MaterialItemLabel>{item.label}</S.MaterialItemLabel>
                      <S.MaterialPointsList>
                        {item.points.map((point, pointIdx) => (
                          <li key={pointIdx}>{point}</li>
                        ))}
                      </S.MaterialPointsList>
                    </S.MaterialItem>
                  ))}
                </S.MaterialItemsList>
              </S.MaterialCategory>
            ))}
          </S.MaterialsSectionsGrid>
        </S.MaterialsSection>

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
                <S.BenefitDescription>
                  {benefit.description}
                </S.BenefitDescription>
              </S.BenefitCard>
            ))}
          </S.BenefitsGrid>
        </S.GuaranteeSection>

        <S.CTASection>
          <S.PrimaryButton onClick={() => navigate("/")}>
            {cooperationData.cta.primary}
          </S.PrimaryButton>
        </S.CTASection>
      </S.CooperationContent>
    </S.CooperationContainer>
  );
};

export default Cooperation;
