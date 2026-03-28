import React, { useRef } from "react";
import * as S from "./styled";
import ProjectCard from "./ProjectCard/index";
import { portfolioData } from "../../../data/portfolioData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Portfolio() {
  const trackRef = useRef(null);
  const busy = useRef(false);

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
        <S.SectionTitle>Przykładowe Prace</S.SectionTitle>
        <S.Subtitle>Ekskluzywne projekty cyfrowe tworzone z pasją</S.Subtitle>
      </S.TitleWrapper>

      <S.SliderOuter>
        <S.ArrowButton
          onClick={() => scroll(-1)}
          aria-label="Poprzedni projekt"
        >
          <FaChevronLeft />
        </S.ArrowButton>

        <S.Track ref={trackRef}>
          {portfolioData.map((project) => (
            <S.CardSlot key={project.id}>
              <ProjectCard project={project} />
            </S.CardSlot>
          ))}
        </S.Track>

        <S.ArrowButton onClick={() => scroll(1)} aria-label="Następny projekt">
          <FaChevronRight />
        </S.ArrowButton>
      </S.SliderOuter>

      <S.ViewAllContainer>
        <S.ViewAllText>Zobacz Pełne Portfolio</S.ViewAllText>
        <S.ViewAllLine />
      </S.ViewAllContainer>
    </S.PortfolioSection>
  );
}

export default Portfolio;
