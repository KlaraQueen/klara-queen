import React, { useState } from "react";
import * as S from "./styled";
import { questionsData } from "../../../data/questionsData";

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <S.FAQSection>
      <S.TitleWrapper>
        <S.SectionTitle>Najczęściej Zadawane Pytania</S.SectionTitle>
        <S.SectionSubtitle>
          Szybkie odpowiedzi na Twoje najbardziej palące wątpliwości
        </S.SectionSubtitle>
      </S.TitleWrapper>

      <S.GridContainer>
        {questionsData.slice(0, 4).map((item) => (
          <S.FAQCard key={item.id} onClick={() => toggleQuestion(item.id)}>
            <S.CardContent>
              <S.QuestionText>{item.question}</S.QuestionText>
              <S.AnswerText isOpen={openId === item.id}>
                {item.answer}
              </S.AnswerText>
            </S.CardContent>
            <S.ToggleIcon isOpen={openId === item.id}>▼</S.ToggleIcon>
          </S.FAQCard>
        ))}
      </S.GridContainer>
    </S.FAQSection>
  );
}

export default FAQ;
