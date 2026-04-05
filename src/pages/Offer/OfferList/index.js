import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { offerData } from "../../../data/offerData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OfferList = () => {
  const baseUrl = process.env.PUBLIC_URL || "";
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Ustal ilość itemów na podstawie wielkości ekranu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 820) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(12);
      }
    };

    handleResize(); // Ustaw na start
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(offerData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOffers = offerData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <S.OfferListWrapper>
      <S.OffersGrid>
        {currentOffers.map((offer) => (
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

      {totalPages > 1 && (
        <S.PaginationWrapper>
          <S.PaginationButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            aria-label="Poprzednia strona"
          >
            <FaChevronLeft />
          </S.PaginationButton>

          <S.PageInfo>
            Strona {currentPage} z {totalPages}
          </S.PageInfo>

          <S.PaginationButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-label="Następna strona"
          >
            <FaChevronRight />
          </S.PaginationButton>
        </S.PaginationWrapper>
      )}
    </S.OfferListWrapper>
  );
};

export default OfferList;
