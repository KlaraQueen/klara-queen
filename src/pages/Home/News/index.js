import React, { useRef } from "react";
import * as S from "./styled";
import { blogData } from "../../../data/blogData";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function News() {
  const navigate = useNavigate();
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
    <S.NewsSection>
      <S.TitleWrapper>
        <S.SectionTitle>Aktualności</S.SectionTitle>
        <S.SectionSubtitle>
          Bądź na bieżąco z najnowszymi wiadomościami ze świata
        </S.SectionSubtitle>
      </S.TitleWrapper>

      <S.SliderOuter>
        <S.ArrowButton
          onClick={() => scroll(-1)}
          aria-label="Poprzedni artykuł"
        >
          <FaChevronLeft />
        </S.ArrowButton>

        <S.GridContainer ref={trackRef}>
          {blogData.map((article) => (
            <S.ArticleCard
              key={article.id}
              onClick={() => navigate(`/blog/${article.id}`)}
              style={{ cursor: "pointer" }}
            >
              <S.ArticleImage src={article.image} alt={article.title} />
              <S.ArticleContent>
                <S.ArticleTitle>{article.title}</S.ArticleTitle>
                <S.ArticleExcerpt>{article.excerpt}</S.ArticleExcerpt>
                <S.ArticleDate>{article.date}</S.ArticleDate>
              </S.ArticleContent>
            </S.ArticleCard>
          ))}
        </S.GridContainer>

        <S.ArrowButton onClick={() => scroll(1)} aria-label="Następny artykuł">
          <FaChevronRight />
        </S.ArrowButton>
      </S.SliderOuter>
    </S.NewsSection>
  );
}

export default News;
