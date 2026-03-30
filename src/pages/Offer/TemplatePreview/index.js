import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { offerData, templatePreviewStrings } from "../../../data/offerData";
import HeroSection from "./Hero";
import VideoSectionComponent from "./Video";
import FeaturesComponent from "./Features";
import CTAComponent from "./CTA";
import { SectionTitle, Description, Section } from "./shared/styled";

const TemplatePreview = ({ offerId }) => {
  const navigate = useNavigate();
  const offer = offerData.find((o) => o.id === offerId);

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

        <Section
          title={templatePreviewStrings.aboutTitle}
          description={offer.fullDescription}
        />

        <FeaturesComponent
          title={templatePreviewStrings.featuresTitle}
          features={offer.features}
        />

        <CTAComponent title={offer.title} />
      </S.Content>
    </S.Container>
  );
};

export default TemplatePreview;
