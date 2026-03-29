import React from "react";
import * as S from "./styled";
import * as FaqS from "./styled-faq";
import { aboutFaq } from "../../../data/aboutData";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <FaqS.FAQWrapper>
      <S.List>
        {aboutFaq.map((item) => (
          <S.Item key={item.id}>
            <S.Question>{item.question}</S.Question>
            <S.Answer>{item.answer}</S.Answer>
          </S.Item>
        ))}
      </S.List>
      <FaqS.FAQButton onClick={() => navigate("/questions")}>
        Zobacz Więcej Pytań
      </FaqS.FAQButton>
    </FaqS.FAQWrapper>
  );
};

export default FAQ;
