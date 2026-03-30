import React from "react";
import { useParams, Link } from "react-router-dom";
import * as S from "../ArticleLayout/styled";
import { articleRegistry } from "../ArticleRegistry";

function Article() {
  const { id } = useParams();
  const ArticleComponent = articleRegistry[id];

  if (!ArticleComponent) {
    return (
      <S.ArticleContainer>
        <S.ArticleContent>
          <S.ArticleHeader>
            <S.ArticleTitle>Artykuł nie znaleziony</S.ArticleTitle>
          </S.ArticleHeader>
          <S.ArticleFooter>
            <Link to="/blog">
              <S.BackLink>Wróć do aktualności</S.BackLink>
            </Link>
          </S.ArticleFooter>
        </S.ArticleContent>
      </S.ArticleContainer>
    );
  }

  return <ArticleComponent />;
}

export default Article;
