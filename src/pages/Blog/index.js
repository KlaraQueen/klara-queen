import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { blogData } from "../../data/blogData";
import Pagination from "../../components/Pagination";

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const isBelowTablet = window.innerWidth < 820;
      setItemsPerPage(isBelowTablet ? 4 : 6);
    };

    handleResize(); // Ustaw na start
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll na początek strony gdy zmieni się strona
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = blogData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
          {currentArticles.map((article) => (
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

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </S.BlogContent>
    </S.BlogContainer>
  );
}

export default Blog;
