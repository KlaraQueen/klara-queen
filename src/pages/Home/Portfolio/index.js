import React, { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import ProjectCard from "./ProjectCard/index";
import { portfolioPageData } from "../../../data/portfolioPageData";
import { FaChevronLeft, FaChevronRight, FaGem } from "react-icons/fa";
import { useOffers } from "../../../hooks/useOffers";
import { getOfferCoverUrl } from "../../../utils/offerImages";
import fallbackImage from "../../../assets/projects/pexels-dimkidama-15115560.jpg";

const HOME_OFFERS_LIMIT = 10;

/** Oferty są już z API posortowane po `createdAt` malejąco (najnowsze pierwsze). */
function mapOfferToProject(offer) {
  const thumb = getOfferCoverUrl(offer) || fallbackImage;

  return {
    id: offer.id,
    internalTo: `/offer/${offer.id}`,
    title: (offer.title && String(offer.title).trim()) || "Oferta",
    description: offer.shortDescription
      ? String(offer.shortDescription).trim()
      : "",
    image: thumb,
    icon: FaGem,
  };
}

function Portfolio() {
  const trackRef = useRef(null);
  const busy = useRef(false);
  const { offers, loading } = useOffers();

  const projects = useMemo(
    () => offers.slice(0, HOME_OFFERS_LIMIT).map(mapOfferToProject),
    [offers],
  );

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el || busy.current) return;
    const firstCard = el.firstElementChild;
    if (!firstCard) return;
    const gap = parseFloat(getComputedStyle(el).gap) || 16;
    const step = firstCard.offsetWidth + gap;
    const max = el.scrollWidth - el.clientWidth;

    busy.current = true;
    if (dir > 0 && el.scrollLeft >= max - 2) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir < 0 && el.scrollLeft <= 2) {
      el.scrollTo({ left: max, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * step, behavior: "smooth" });
    }
    setTimeout(() => {
      busy.current = false;
    }, 580);
  };

  return (
    <S.PortfolioSection>
      <S.TitleWrapper>
        <S.SectionTitle>{portfolioPageData.header.title}</S.SectionTitle>
        <S.Subtitle>{portfolioPageData.header.subtitle}</S.Subtitle>
      </S.TitleWrapper>

      {loading ? (
        <S.StatusLine>Ładowanie najnowszych ofert…</S.StatusLine>
      ) : projects.length === 0 ? (
        <S.StatusLine>Wkrótce pojawią się tu opublikowane oferty.</S.StatusLine>
      ) : (
        <S.SliderOuter>
          <S.ArrowButton
            onClick={() => scroll(-1)}
            aria-label="Poprzednia oferta"
          >
            <FaChevronLeft />
          </S.ArrowButton>

          <S.Track ref={trackRef}>
            {projects.map((project) => (
              <S.CardSlot key={project.id}>
                <ProjectCard project={project} />
              </S.CardSlot>
            ))}
          </S.Track>

          <S.ArrowButton onClick={() => scroll(1)} aria-label="Następna oferta">
            <FaChevronRight />
          </S.ArrowButton>
        </S.SliderOuter>
      )}

      <S.ViewAllContainer as={Link} to="/offer">
        <S.ViewAllText>{portfolioPageData.viewAllText}</S.ViewAllText>
        <S.ViewAllLine />
      </S.ViewAllContainer>
    </S.PortfolioSection>
  );
}

export default Portfolio;
