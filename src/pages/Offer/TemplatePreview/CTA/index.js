import React from "react";
import * as S from "./styled";
import { socialMediaData } from "../../../../data/socialMediaData";

const CTAComponent = ({ offer }) => {
  const defaultAllegro = socialMediaData.find(
    (item) => item.label === "Allegro",
  )?.url;
  const allegroHref =
    (offer?.allegroUrl || "").trim() || (defaultAllegro || "").trim();

  return (
    <S.CTASection>
      <S.CTATitle>Interesuje Cię ten szablon?</S.CTATitle>
      <S.CTAButtons>
        {allegroHref ? (
          <S.PrimaryButton
            href={allegroHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zakup na Allegro
          </S.PrimaryButton>
        ) : (
          <S.CTAMutedText>
            Link do aukcji pojawi się wkrótce — napisz do nas w sprawie tego
            szablonu.
          </S.CTAMutedText>
        )}
      </S.CTAButtons>
    </S.CTASection>
  );
};

export default CTAComponent;
