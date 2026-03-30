import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import OfferList from "./OfferList";
import TemplatePreview from "./TemplatePreview";
import { offerPageHeader } from "../../data/offerData";

const Offer = () => {
  const { id } = useParams();

  if (id) {
    return <TemplatePreview offerId={parseInt(id)} />;
  }

  return (
    <S.OfferContainer>
      <S.OfferContent>
        <S.OfferHeader>
          <S.OfferTitle>{offerPageHeader.title}</S.OfferTitle>
          <S.OfferSubtitle>
            {offerPageHeader.subtitle}
          </S.OfferSubtitle>
        </S.OfferHeader>

        <OfferList />
      </S.OfferContent>
    </S.OfferContainer>
  );
};

export default Offer;
