import React from "react";
import * as S from "./styled";
import { blogData } from "../../../data/blogData";
import { useNavigate } from "react-router-dom";

function News() {
  const navigate = useNavigate();

  return (
    <S.NewsSection>
      <S.TitleWrapper>
        <S.SectionTitle>Aktualności</S.SectionTitle>
        <S.SectionSubtitle>
          Bądź na bieżąco z najnowszymi wiadomościami ze świata
        </S.SectionSubtitle>
      </S.TitleWrapper>

      <S.GridContainer>
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
    </S.NewsSection>
  );
}

export default News;
