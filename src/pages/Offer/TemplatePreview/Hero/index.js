import React from "react";
import * as S from "./styled";
import GallerySection from "../GallerySection";

const HeroSection = ({ title, subtitle, price, liveUrl, images }) => {
  const hasImages = Array.isArray(images) && images.length > 0;

  return (
    <S.Hero>
      <S.HeroContent>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        {price && (
          <S.PriceTag>
            <S.PriceTagValue>{price}</S.PriceTagValue>
          </S.PriceTag>
        )}
        {liveUrl ? (
          <S.LiveLink
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zobacz stronę na żywo
          </S.LiveLink>
        ) : null}
      </S.HeroContent>
      {hasImages ? (
        <GallerySection images={images} title={title} />
      ) : (
        <S.NoPhotos>
          Brak zdjęć w tej ofercie — dodaj je w panelu admina (zdjęcie główne lub
          galeria), potem zapisz ofertę ponownie.
        </S.NoPhotos>
      )}
    </S.Hero>
  );
};

export default HeroSection;
