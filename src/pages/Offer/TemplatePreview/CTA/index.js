import React from "react";
import * as S from "./styled";

const CTAComponent = ({ onEmailClick, onAllegroClick }) => {
  return (
    <S.CTASection>
      <S.CTATitle>Interesuje Cię ten szablon?</S.CTATitle>
      <S.CTAButtons>
        <S.PrimaryButton onClick={onEmailClick}>Napisz email</S.PrimaryButton>
        <S.SecondaryButton onClick={onAllegroClick}>
          Zakup Allegro
        </S.SecondaryButton>
      </S.CTAButtons>
    </S.CTASection>
  );
};

export default CTAComponent;
