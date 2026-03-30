import React from "react";
import * as S from "./styled";
import { contactData } from "../../../../data/contactData";
import { socialMediaData } from "../../../../data/socialMediaData";

const CTAComponent = ({ title }) => {
  const allegro = socialMediaData.find((item) => item.label === "Allegro")?.url;

  return (
    <S.CTASection>
      <S.CTATitle>Interesuje Cię ten szablon?</S.CTATitle>
      <S.CTAButtons>
        <S.PrimaryButton
          href={`mailto:${contactData.email}?subject=Zainteresowanie szablonką: ${title}`}
        >
          Napisz email
        </S.PrimaryButton>
        <S.SecondaryButton
          href={allegro}
          target="_blank"
          rel="noopener noreferrer"
        >
          Zakup Allegro
        </S.SecondaryButton>
      </S.CTAButtons>
    </S.CTASection>
  );
};

export default CTAComponent;
