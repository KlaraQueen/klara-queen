import React from "react";
import * as S from "./styled";
import { useOffer } from "../../../hooks/useOffers";
import { contactData } from "../../../data/contactData";
import PriceSection from "./PriceSection";
import FeaturesSection from "./FeaturesSection";

const OfferDetails = ({ offerId, onClose, isFullPage = false }) => {
  const { offer, loading } = useOffer(offerId);

  if (loading) return null;
  if (!offer) return null;

  const contentJSX = (
    <>
      <S.DetailsGrid isFullPage={isFullPage}>
        <S.DetailsContent>
          <S.DetailsTitle>{offer.title}</S.DetailsTitle>
          <S.DetailsDescription>{offer.fullDescription}</S.DetailsDescription>

          <PriceSection price={offer.price} />

          <FeaturesSection features={offer.features} />

          {offer.liveUrl ? (
            <S.LiveButton
              href={offer.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz stronę na żywo
            </S.LiveButton>
          ) : null}

          <S.ButtonGroup>
            <S.PrimaryButton
              href={`mailto:${contactData.email}`}
              target="_blank"
            >
              Zainteresowana
            </S.PrimaryButton>
            {!isFullPage && (
              <S.SecondaryButton onClick={onClose}>Zamknij</S.SecondaryButton>
            )}
          </S.ButtonGroup>
        </S.DetailsContent>
      </S.DetailsGrid>
    </>
  );

  if (isFullPage) {
    return <S.OfferDetailsFullPage>{contentJSX}</S.OfferDetailsFullPage>;
  }

  return (
    <S.OfferDetailsOverlay onClick={onClose}>
      <S.OfferDetailsModal onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>✕</S.CloseButton>
        {contentJSX}
      </S.OfferDetailsModal>
    </S.OfferDetailsOverlay>
  );
};

export default OfferDetails;
