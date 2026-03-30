import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { questionsData } from "../../data/questionsData";
import { questionsPageData } from "../../data/questionsPageData";

const Questions = () => {
  const navigate = useNavigate();

  return (
    <S.QuestionsContainer>
      <S.QuestionsContent>
        <S.QuestionsHeader>
          <S.QuestionsTitle>{questionsPageData.header.title}</S.QuestionsTitle>
          <S.QuestionsSubtitle>
            {questionsPageData.header.subtitle}
          </S.QuestionsSubtitle>
        </S.QuestionsHeader>

        <S.QuestionsList>
          {questionsData.map((item, index) => (
            <S.QuestionItem key={item.id} style={{ "--index": index }}>
              <S.QuestionTitle>{item.question}</S.QuestionTitle>
              <S.QuestionAnswer>
                {item.answer}
                {item.cooperationLink && (
                  <>
                    {" "}
                    <S.CooperationLink onClick={() => navigate("/cooperation")}>
                      Współpraca
                    </S.CooperationLink>
                    .
                  </>
                )}
              </S.QuestionAnswer>
            </S.QuestionItem>
          ))}
        </S.QuestionsList>

        <S.QuestionsFooter>
          <S.BackButton onClick={() => navigate("/")}>
            {questionsPageData.buttons.backLabel}
          </S.BackButton>
        </S.QuestionsFooter>
      </S.QuestionsContent>
    </S.QuestionsContainer>
  );
};

export default Questions;
