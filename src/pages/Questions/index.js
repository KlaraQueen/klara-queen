import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { questionsData } from "../../data/questionsData";

const Questions = () => {
  const navigate = useNavigate();

  return (
    <S.QuestionsContainer>
      <S.QuestionsContent>
        <S.QuestionsHeader>
          <S.QuestionsTitle>Najczęstsze Pytania</S.QuestionsTitle>
          <S.QuestionsSubtitle>
            Znaleziono odpowiedzi na Twoje wątpliwości. Poniżej znajduje się
            kompletny przewodnik po najczęściej zadawanych pytaniach dotyczących
            naszych usług.
          </S.QuestionsSubtitle>
        </S.QuestionsHeader>

        <S.QuestionsList>
          {questionsData.map((item, index) => (
            <S.QuestionItem key={item.id} style={{ "--index": index }}>
              <S.QuestionTitle>{item.question}</S.QuestionTitle>
              <S.QuestionAnswer>{item.answer}</S.QuestionAnswer>
            </S.QuestionItem>
          ))}
        </S.QuestionsList>

        <S.QuestionsFooter>
          <S.BackButton onClick={() => navigate("/")}>
            Powrót do strony głównej
          </S.BackButton>
        </S.QuestionsFooter>
      </S.QuestionsContent>
    </S.QuestionsContainer>
  );
};

export default Questions;
