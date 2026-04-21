import React from "react";
import * as S from "./styled";
import { socialMediaData } from "../../../../data/socialMediaData";

const CTAComponent = ({ offer }) => {
  const stripePaymentUrl = (offer?.stripePaymentUrl || "").trim();
  const stripeSubscriptionUrl = (offer?.stripeSubscriptionUrl || "").trim();
  const allegro = socialMediaData.find((item) => item.label === "Allegro")?.url;

  return (
    <S.CTASection>
      <S.CTATitle>Interesuje Cię ten szablon?</S.CTATitle>
      <S.CTAButtons>
        {stripePaymentUrl ? (
          <S.PrimaryButton
            href={stripePaymentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Kup teraz
          </S.PrimaryButton>
        ) : null}

        {stripeSubscriptionUrl ? (
          <S.SecondaryButton
            href={stripeSubscriptionUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Subskrybuj
          </S.SecondaryButton>
        ) : null}

        {allegro ? (
          <S.SecondaryButton
            href={allegro}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zakup Allegro
          </S.SecondaryButton>
        ) : null}
      </S.CTAButtons>
    </S.CTASection>
  );
};

export default CTAComponent;
