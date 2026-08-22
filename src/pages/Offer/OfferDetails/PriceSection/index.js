import React from "react";
import * as S from "./styled";

const PriceSection = ({ price, lowestPrice30Days }) => {
  return (
    <S.PriceSection>
      <S.PriceLabel>Cena za projekt:</S.PriceLabel>
      <S.Price>{price}</S.Price>
      {lowestPrice30Days ? (
        <S.LowestPrice>
          Najniższa cena z 30 dni: {lowestPrice30Days}
        </S.LowestPrice>
      ) : null}
    </S.PriceSection>
  );
};

export default PriceSection;
