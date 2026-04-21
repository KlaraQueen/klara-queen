import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { templatePreviewStrings } from "../../../data/offerData";
import { useOffer } from "../../../hooks/useOffers";
import HeroSection from "./Hero";
import VideoSectionComponent from "./Video";
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

  return (
    <S.Container>
      <S.BackButton onClick={() => navigate(-1)}>
        {templatePreviewStrings.backLabel}
      </S.BackButton>

      <HeroSection
        title={offer.title}
        subtitle={offer.shortDescription}
        price={offer.price}
        images={offer.images}
      />

      <S.Content>
        <VideoSectionComponent
          title={templatePreviewStrings.videoTitle}
          youtubeUrl={offer.youtubeUrl}
        />

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
