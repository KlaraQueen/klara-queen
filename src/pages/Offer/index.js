import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import OfferList from "./OfferList";
import TemplatePreview from "./TemplatePreview";

const Offer = () => {
  const { id } = useParams();

  if (id) {
    return <TemplatePreview offerId={parseInt(id)} />;
  }

  return (
    <S.OfferContainer>
      <S.OfferContent>
        <S.OfferHeader>
          <S.OfferTitle>Nasze Projekty</S.OfferTitle>
          <S.OfferSubtitle>
            Odkryj gotowe szablony stron dostosowane do różnych branż. Każdy
            projekt zawiera wszystko, co potrzebujesz, aby wyglądać
            profesjonalnie w sieci.
          </S.OfferSubtitle>
        </S.OfferHeader>

        <OfferList />
      </S.OfferContent>
    </S.OfferContainer>
  );
};

export default Offer;
