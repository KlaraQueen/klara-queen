import React from "react";
import * as S from "./styled";
import GallerySection from "../GallerySection";

const HeroSection = ({ title, subtitle, price, images }) => {
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
      </S.HeroContent>
      <GallerySection images={images} title={title} />
    </S.Hero>
  );
};

export default HeroSection;
