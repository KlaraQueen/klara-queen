import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import OfferList from "./OfferList";
import TemplatePreview from "./TemplatePreview";
import { offerPageHeader } from "../../data/offerData";

const Offer = () => {
  const { id } = useParams();

  if (id) {
    return <TemplatePreview offerId={id} />;
  }

  return (
    <S.OfferContainer>
      <S.OfferContent>
        <S.OfferHeader>
          <S.OfferTitle>{offerPageHeader.title}</S.OfferTitle>
          <S.OfferSubtitle>{offerPageHeader.subtitle}</S.OfferSubtitle>
        </S.OfferHeader>

        <S.TempNotice role="status" aria-live="polite">
          <S.TempNoticeTitle>Pracujemy nad ofertą</S.TempNoticeTitle>
          <S.TempNoticeText>
            Tworzymy nowe projekty i odświeżamy tę zakładkę. Niedługo znów tu
            znajdziecie aktualne szablony — tymczasem <strong>śmiało piszcie</strong>{" "}
            do nas, chętnie odpowiemy na wiadomości.
          </S.TempNoticeText>
        </S.TempNotice>

        <OfferList />
      </S.OfferContent>
    </S.OfferContainer>
  );
};

export default Offer;
