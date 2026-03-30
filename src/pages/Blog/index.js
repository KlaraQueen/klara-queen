import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { blogData } from "../../data/blogData";

function Blog() {
  return (
    <S.BlogContainer>
      <S.BlogContent>
        <S.BlogHeader>
          <S.BlogTitle>Aktualności</S.BlogTitle>
          <S.BlogSubtitle>
            Bądź na bieżąco z najnowszymi wpisami z naszego bloga. Dzielimy się
            wiedzą o technologii, designie i procesie tworzenia luksusowych
            doświadczeń cyfrowych.
          </S.BlogSubtitle>
        </S.BlogHeader>

        <S.ArticlesGrid>
          {blogData.map((article) => (
            <S.ArticleCard key={article.id}>
              <Link to={`/blog/${article.id}`}>
                <S.ArticleImage src={article.image} alt={article.title} />
                <S.ArticleBody>
                  <S.ArticleDate>{article.date}</S.ArticleDate>
                  <S.ArticleTitle>{article.title}</S.ArticleTitle>
                  <S.ArticleExcerpt>{article.excerpt}</S.ArticleExcerpt>
                  <S.ReadMoreButton>Czytaj więcej</S.ReadMoreButton>
                </S.ArticleBody>
              </Link>
            </S.ArticleCard>
          ))}
        </S.ArticlesGrid>
      </S.BlogContent>
    </S.BlogContainer>
  );
}

export default Blog;
