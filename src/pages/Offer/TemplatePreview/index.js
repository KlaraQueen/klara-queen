import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { offerData } from "../../../data/offerData";
import GallerySection from "./GallerySection";

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
      <S.BackButton onClick={() => navigate(-1)}>← Wróć do ofert</S.BackButton>

      <S.Hero>
        <S.HeroContent>
          <S.Title>{offer.title}</S.Title>
          <S.Subtitle>{offer.shortDescription}</S.Subtitle>
          <S.PriceTag>
            <span>{offer.price}</span>
          </S.PriceTag>
        </S.HeroContent>
        <GallerySection images={offer.images} title={offer.title} />
      </S.Hero>

      <S.Content>
        <S.VideoSection>
          <S.SectionTitle>Preview szablonu</S.SectionTitle>
          <S.VideoContainer>
            <iframe
              width="100%"
              src={offer.youtubeUrl}
              title={offer.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.VideoContainer>
        </S.VideoSection>

        <S.Section>
          <S.SectionTitle>O szablonie</S.SectionTitle>
          <S.Description>{offer.fullDescription}</S.Description>
        </S.Section>

        <S.FeaturesSection>
          <S.SectionTitle>Szablon zawiera:</S.SectionTitle>
          <S.FeaturesList>
            {offer.features.map((feature, idx) => (
              <S.FeatureItem key={idx}>
                <S.FeatureCheckmark>✓</S.FeatureCheckmark>
                <span>{feature}</span>
              </S.FeatureItem>
            ))}
          </S.FeaturesList>
        </S.FeaturesSection>

        <S.CTASection>
          <S.CTATitle>Interesuje Cię ten szablon?</S.CTATitle>
          <S.CTAButtons>
            <S.PrimaryButton href="mailto:kontakt@studioklara.pl?subject=Zainteresowanie szablonką: ${offer.title}">
              Napisz email
            </S.PrimaryButton>
            <S.SecondaryButton
              href="https://allegro.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zakup Allegro
            </S.SecondaryButton>
          </S.CTAButtons>
        </S.CTASection>
      </S.Content>
    </S.Container>
  );
};

export default TemplatePreview;
