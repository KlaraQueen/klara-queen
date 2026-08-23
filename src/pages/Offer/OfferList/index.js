import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { useOffers } from "../../../hooks/useOffers";
import Pagination from "../../../components/Pagination";
import ViewToggle from "../../../components/ViewToggle";
import { getOfferCoverUrl } from "../../../utils/offerImages";

const OfferList = () => {
  const baseUrl = process.env.PUBLIC_URL || "";
  const thumbFallback = `${baseUrl}/logo192.png`;
  const { offers, loading } = useOffers();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("offerViewMode");
      return saved || "grid";
    }
    return "grid";
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    localStorage.setItem("offerViewMode", viewMode);
  }, [viewMode]);

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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const totalPages = Math.max(
    1,
    Math.ceil((offers?.length || 0) / itemsPerPage),
  );

  useEffect(() => {
    const tp = Math.max(1, Math.ceil((offers?.length || 0) / itemsPerPage));
    setCurrentPage((p) => Math.min(Math.max(1, p), tp));
  }, [offers?.length, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOffers = (offers || []).slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const listContent = loading ? null : !offers || offers.length === 0 ? (
    <div
      style={{
        textAlign: "center",
        padding: "48px 0",
        color: "rgba(255,255,255,0.5)",
      }}
    >
      Brak opublikowanych szablonów.
    </div>
  ) : viewMode === "grid" ? (
    <S.OffersGrid>
      {currentOffers.map((offer) => (
        <S.OfferCardLink
          key={offer.id}
          href={`${baseUrl}/offer/${offer.id}`}
          target={isMobile ? undefined : "_blank"}
          rel={isMobile ? undefined : "noopener noreferrer"}
        >
          <S.OfferCard>
            <S.OfferImage
              src={getOfferCoverUrl(offer) || thumbFallback}
              alt={offer.title}
            />
            <S.OfferCardContent>
              <S.OfferCardTitle>{offer.title}</S.OfferCardTitle>
              <S.OfferCardDescription>
                {offer.shortDescription}
              </S.OfferCardDescription>
              <S.OfferCardFooter>
                <S.OfferPriceWrap>
                  <S.OfferPrice>{offer.price}</S.OfferPrice>
                  {offer.lowestPrice30Days ? (
                    <S.OfferLowestPrice>
                      Najniższa cena z 30 dni: {offer.lowestPrice30Days}
                    </S.OfferLowestPrice>
                  ) : null}
                </S.OfferPriceWrap>
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
          <S.OfferListImage
            src={getOfferCoverUrl(offer) || thumbFallback}
            alt={offer.title}
          />
          <S.OfferListContent>
            <S.OfferListTitle>{offer.title}</S.OfferListTitle>
            <S.OfferListDescription>
              {offer.shortDescription}
            </S.OfferListDescription>
            <S.OfferListFooter>
              <S.OfferListPriceWrap>
                <S.OfferListPrice>{offer.price}</S.OfferListPrice>
                {offer.lowestPrice30Days ? (
                  <S.OfferListLowestPrice>
                    Najniższa cena z 30 dni: {offer.lowestPrice30Days}
                  </S.OfferListLowestPrice>
                ) : null}
              </S.OfferListPriceWrap>
              <S.OfferListButton>Szczegóły</S.OfferListButton>
            </S.OfferListFooter>
          </S.OfferListContent>
        </S.OfferListItem>
      ))}
    </S.OffersList>
  );

  return (
    <S.OfferListWrapper>
      <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />

      {loading ? (
        <div
          style={{
            padding: "48px 0",
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Ładowanie ofert…
        </div>
      ) : (
        listContent
      )}

      {!loading && offers && offers.length > 0 ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : null}
    </S.OfferListWrapper>
  );
};

export default OfferList;
