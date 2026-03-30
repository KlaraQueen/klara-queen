import React from "react";
import * as S from "./styled";
import { aboutFaq } from "../../../data/aboutData";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <S.FAQWrapper>
      <S.List>
        {aboutFaq.map((item) => (
          <S.Item key={item.id}>
            <S.Question>{item.question}</S.Question>
            <S.Answer>{item.answer}</S.Answer>
          </S.Item>
        ))}
      </S.List>
      <S.FAQButton onClick={() => navigate("/questions")}>
        Zobacz Więcej Pytań
      </S.FAQButton>
    </S.FAQWrapper>
  );
};

export default FAQ;
