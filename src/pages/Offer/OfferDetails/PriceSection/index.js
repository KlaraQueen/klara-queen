import React from "react";
import * as S from "./styled";

const PriceSection = ({ price }) => {
  return (
    <S.PriceSection>
      <S.PriceLabel>Cena za projekt:</S.PriceLabel>
      <S.Price>{price}</S.Price>
    </S.PriceSection>
  );
};

export default PriceSection;
