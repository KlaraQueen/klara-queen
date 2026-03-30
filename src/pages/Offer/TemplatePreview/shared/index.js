import React from "react";
import * as S from "./styled";

const SharedSection = ({ title, description, children }) => {
  return (
    <S.Section>
      <S.SectionTitle>{title}</S.SectionTitle>
      {description && <S.Description>{description}</S.Description>}
      {children}
    </S.Section>
  );
};

export default SharedSection;
