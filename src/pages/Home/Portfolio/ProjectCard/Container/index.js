import React from "react";
import * as S from "./styled";

function Container({ children, type, url, isLink }) {
  return (
    <S.CardContainer
      as={type === "link" ? "a" : "div"}
      href={type === "link" ? url : undefined}
      target={type === "link" ? "_blank" : undefined}
      isLink={isLink}
    >
      {children}
    </S.CardContainer>
  );
}

export default Container;
