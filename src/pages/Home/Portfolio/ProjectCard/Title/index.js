import React from "react";
import * as S from "./styled";

function Title({ title, description }) {
  return (
    <>
      <S.ProjectTitle>{title}</S.ProjectTitle>
      {description && (
        <S.ProjectDescription>{description}</S.ProjectDescription>
      )}
    </>
  );
}

export default Title;
