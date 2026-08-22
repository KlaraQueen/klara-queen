import React, { useState, useEffect, useMemo } from "react";
import { FaChevronDown } from "react-icons/fa";
import * as S from "./styled";
import { useOffers } from "../../../hooks/useOffers";
import Pagination from "../../../components/Pagination";
import ViewToggle from "../../../components/ViewToggle";
import {
  offerFilterCategories,
  offerFilterStyles,
  offerFilterColors,
} from "../../../data/offerData";
import { getOfferCoverUrl } from "../../../utils/offerImages";

const OfferList = () => {
  const baseUrl = process.env.PUBLIC_URL || "";
  const thumbFallback = `${baseUrl}/logo192.png`;
  const { offers, loading } = useOffers();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [category, setCategory] = useState("");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
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

  const filteredOffers = useMemo(() => {
    let list = offers || [];
    if (category) {
      list = list.filter((o) => (o.category || "") === category);
    }
    if (style) {
      list = list.filter((o) => (o.style || "") === style);
    }
    if (color) {
      list = list.filter(
        (o) => Array.isArray(o.colors) && o.colors.includes(color),
      );
    }
    return list;
  }, [offers, category, style, color]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category, style, color]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredOffers.length / itemsPerPage),
  );

  useEffect(() => {
    const tp = Math.max(
      1,
      Math.ceil(filteredOffers.length / itemsPerPage),
    );
    setCurrentPage((p) => Math.min(Math.max(1, p), tp));
  }, [filteredOffers.length, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOffers = filteredOffers.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const resetFilters = () => {
    setCategory("");
    setStyle("");
    setColor("");
  };

  const activeFilters = Boolean(category) || Boolean(style) || Boolean(color);
  const totalCount = offers?.length ?? 0;

  const listContent =
    loading ? null : filteredOffers.length === 0 ? (
      <S.EmptyFilter>
        {activeFilters ? (
          <>
            Brak szablonów spełniających kryteria.
            <br />
            Zmień filtry lub wyczyść je.
          </>
        ) : (
          <>Brak opublikowanych szablonów.</>
        )}
      </S.EmptyFilter>
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
                <S.OfferListPrice>{offer.price}</S.OfferListPrice>
                <S.OfferListButton>Szczegóły</S.OfferListButton>
              </S.OfferListFooter>
            </S.OfferListContent>
          </S.OfferListItem>
        ))}
      </S.OffersList>
    );

  return (
    <S.OfferListWrapper>
      <S.ToolbarRow>
        <S.ToolbarLeft>
          <S.FilterToggleWrap>
            <S.FilterToggleBtn
              type="button"
              aria-expanded={filtersOpen}
              aria-controls="offer-filters-panel"
              id="offer-filters-trigger"
              onClick={() => setFiltersOpen((o) => !o)}
            >
              {activeFilters ? <S.FilterActiveDot aria-hidden /> : null}
              Filtry
              <S.FilterChevronWrap $open={filtersOpen} aria-hidden>
                <FaChevronDown />
              </S.FilterChevronWrap>
            </S.FilterToggleBtn>
            {!loading ? (
              <S.FilterMetaInline>
                {activeFilters
                  ? `${filteredOffers.length} z ${totalCount}`
                  : `${totalCount} szablonów`}
              </S.FilterMetaInline>
            ) : null}
          </S.FilterToggleWrap>
        </S.ToolbarLeft>
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </S.ToolbarRow>

      <S.FilterPanel
        $open={filtersOpen}
        id="offer-filters-panel"
        role="region"
        aria-labelledby="offer-filters-trigger"
      >
        <S.FilterPanelInner>
          <S.FilterFieldsRow>
            <S.FilterSelect
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Kategoria"
            >
              {offerFilterCategories.map((c) => (
                <option key={c.value || "all-cat"} value={c.value}>
                  {c.label}
                </option>
              ))}
            </S.FilterSelect>
            <S.FilterSelect
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              aria-label="Styl"
            >
              {offerFilterStyles.map((s) => (
                <option key={s.value || "all-style"} value={s.value}>
                  {s.label}
                </option>
              ))}
            </S.FilterSelect>
            <S.FilterSelect
              value={color}
              onChange={(e) => setColor(e.target.value)}
              aria-label="Kolor"
            >
              {offerFilterColors.map((clr) => (
                <option key={clr.value || "all-color"} value={clr.value}>
                  {clr.label}
                </option>
              ))}
            </S.FilterSelect>
            {activeFilters ? (
              <S.FilterReset type="button" onClick={resetFilters}>
                Wyczyść
              </S.FilterReset>
            ) : null}
          </S.FilterFieldsRow>
          {!loading ? (
            <S.FilterMeta as="div" role="status">
              {activeFilters ? (
                <>
                  Wyniki: <strong>{filteredOffers.length}</strong>
                  {totalCount !== filteredOffers.length ? (
                    <> spośród {totalCount}</>
                  ) : null}
                </>
              ) : (
                <>
                  Widoczne wszystkie: <strong>{totalCount}</strong>
                </>
              )}
            </S.FilterMeta>
          ) : null}
        </S.FilterPanelInner>
      </S.FilterPanel>

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

      {!loading && filteredOffers.length > 0 ? (
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
