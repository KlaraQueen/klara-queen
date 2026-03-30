import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

function ArticleLayout({ article, children }) {
  return (
    <S.ArticleContainer>
      <S.ArticleContent>
        <S.ArticleHeader>
          <S.ArticleTitle>{article.title}</S.ArticleTitle>
          <S.ArticleDate>{article.date}</S.ArticleDate>
        </S.ArticleHeader>

        <S.ArticleImage src={article.image} alt={article.title} />

        <S.ArticleBody>{children}</S.ArticleBody>

        <S.ArticleFooter>
          <Link to="/blog">
            <S.BackLink>Wróć do aktualności</S.BackLink>
          </Link>
        </S.ArticleFooter>
      </S.ArticleContent>
    </S.ArticleContainer>
  );
}

export default ArticleLayout;
