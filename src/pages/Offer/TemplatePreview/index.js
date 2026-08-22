import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { templatePreviewStrings } from "../../../data/offerData";
import { useOffer } from "../../../hooks/useOffers";
import { getOfferCoverUrls } from "../../../utils/offerImages";
import HeroSection from "./Hero";
import FeaturesComponent from "./Features";
import CTAComponent from "./CTA";
import { Section, SectionTitle, Description } from "./shared/styled";

const TemplatePreview = ({ offerId }) => {
  const navigate = useNavigate();
  const { offer, loading } = useOffer(offerId);

  if (loading) {
    return (
      <S.Container>
        <div
          style={{
            padding: "48px 0",
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Ładowanie…
        </div>
      </S.Container>
    );
  }

  if (!offer) {
    return (
      <S.Container>
        <S.ErrorMessage>Szablon nie znaleziony</S.ErrorMessage>
      </S.Container>
    );
  }

  const heroImages = getOfferCoverUrls(offer);

  return (
    <S.Container>
      <S.BackButton onClick={() => navigate("/offer")}>
        {templatePreviewStrings.backLabel}
      </S.BackButton>

      <HeroSection
        title={offer.title}
        subtitle={offer.shortDescription}
        price={offer.price}
        lowestPrice30Days={offer.lowestPrice30Days}
        liveUrl={offer.liveUrl}
        images={heroImages}
      />

      <S.Content>
        <Section>
          <SectionTitle>{templatePreviewStrings.aboutTitle}</SectionTitle>
          <Description>{offer.fullDescription}</Description>
        </Section>

        <FeaturesComponent
          title={templatePreviewStrings.featuresTitle}
          features={offer.features}
        />

        <CTAComponent offer={offer} />
      </S.Content>
    </S.Container>
  );
};

export default TemplatePreview;
