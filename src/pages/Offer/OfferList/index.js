import React from "react";
import * as S from "./styled";
import { offerData } from "../../../data/offerData";

const OfferList = () => {
  const baseUrl = process.env.PUBLIC_URL || "";

  return (
    <S.OffersGrid>
      {offerData.map((offer) => (
        <S.OfferCardLink
          key={offer.id}
          href={`${baseUrl}/offer/${offer.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.OfferCard>
            <S.OfferImage src={offer.image} alt={offer.title} />
            <S.OfferCardContent>
              <S.OfferCardTitle>{offer.title}</S.OfferCardTitle>
              <S.OfferCardDescription>
                {offer.shortDescription}
              </S.OfferCardDescription>
              <S.OfferCardFooter>
                <S.OfferPrice>{offer.price}</S.OfferPrice>
                <S.OfferButton>Szczegóły</S.OfferButton>
              </S.OfferCardFooter>
            </S.OfferCardContent>
          </S.OfferCard>
        </S.OfferCardLink>
      ))}
    </S.OffersGrid>
  );
};

export default OfferList;
