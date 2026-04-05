import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { offerData } from "../../../data/offerData";
import { FaThLarge, FaList } from "react-icons/fa";
import Pagination from "../../../components/Pagination";

const OfferList = () => {
  const baseUrl = process.env.PUBLIC_URL || "";
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("grid"); // "grid" lub "list"
  const [isMobile, setIsMobile] = useState(false);

  // Ustal ilość itemów na podstawie wielkości ekranu
  useEffect(() => {
    const handleResize = () => {
      const isBelowTablet = window.innerWidth < 820;
      setIsMobile(isBelowTablet);
      if (isBelowTablet) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(12);
      }
    };

    handleResize(); // Ustaw na start
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll na początek stronę "Nasze Projekty" gdy zmieni się strona
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const totalPages = Math.ceil(offerData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOffers = offerData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <S.OfferListWrapper>
      <S.ViewToggleContainer>
        <S.ViewToggleButton
          onClick={() => setViewMode("grid")}
          active={viewMode === "grid"}
          aria-label="Widok kafelków"
          title="Widok kafelków"
        >
          <FaThLarge />
        </S.ViewToggleButton>
        <S.ViewToggleButton
          onClick={() => setViewMode("list")}
          active={viewMode === "list"}
          aria-label="Widok listy"
          title="Widok listy"
        >
          <FaList />
        </S.ViewToggleButton>
      </S.ViewToggleContainer>

      {viewMode === "grid" ? (
        <S.OffersGrid>
          {currentOffers.map((offer) => (
            <S.OfferCardLink
              key={offer.id}
              href={`${baseUrl}/offer/${offer.id}`}
              target={isMobile ? undefined : "_blank"}
              rel={isMobile ? undefined : "noopener noreferrer"}
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
      ) : (
        <S.OffersList>
          {currentOffers.map((offer) => (
            <S.OfferListItem
              key={offer.id}
              href={`${baseUrl}/offer/${offer.id}`}
              target={isMobile ? undefined : "_blank"}
              rel={isMobile ? undefined : "noopener noreferrer"}
            >
              <S.OfferListImage src={offer.image} alt={offer.title} />
              <S.OfferListContent>
                <S.OfferListTitle>{offer.title}</S.OfferListTitle>
                <S.OfferListDescription>
                  {offer.shortDescription}
                </S.OfferListDescription>
                <S.OfferListFooter>
                  <S.OfferListPrice>{offer.price}</S.OfferListPrice>
                  <S.OfferListButton>Szczegóły</S.OfferListButton>
                </S.OfferListFooter>
              </S.OfferListContent>
            </S.OfferListItem>
          ))}
        </S.OffersList>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </S.OfferListWrapper>
  );
};

export default OfferList;
