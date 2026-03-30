import React from "react";
import * as S from "./styled";
import { cooperationData } from "../../../data/cooperationData";

const Header = () => {
  return (
    <S.CooperationHeader>
      <S.CooperationTitle>{cooperationData.hero.title}</S.CooperationTitle>
      <S.CooperationSubtitle>
        {cooperationData.hero.subtitle}
      </S.CooperationSubtitle>
    </S.CooperationHeader>
  );
};

export default Header;
