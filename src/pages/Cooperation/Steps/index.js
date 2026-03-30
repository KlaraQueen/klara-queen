import React from "react";
import * as S from "./styled";
import { cooperationData } from "../../../data/cooperationData";

const Steps = () => {
  return (
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
  );
};

export default Steps;
