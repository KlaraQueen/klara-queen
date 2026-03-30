import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { cooperationData } from "../../../data/cooperationData";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <S.CTASection>
      <S.PrimaryButton onClick={() => navigate("/")}>
        {cooperationData.cta.primary}
      </S.PrimaryButton>
    </S.CTASection>
  );
};

export default CTA;
