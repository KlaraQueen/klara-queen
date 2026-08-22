import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

/**
 * internalTo → karta jako Link (SPA).
 * href + external → klasyczny <a> na zewnętrzny URL (np. przyszły link z danych).
 */
function Container({ children, internalTo, href }) {
  const isLink = Boolean(internalTo || href);

  if (internalTo) {
    return (
      <S.CardContainer as={Link} to={internalTo} isLink>
        {children}
      </S.CardContainer>
    );
  }

  if (href) {
    return (
      <S.CardContainer
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        isLink={isLink}
      >
        {children}
      </S.CardContainer>
    );
  }

  return <S.CardContainer isLink={isLink}>{children}</S.CardContainer>;
}

export default Container;
