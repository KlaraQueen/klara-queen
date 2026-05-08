import React from "react";
import * as S from "./styled";
import { OFFER_COLOR_OPTIONS } from "../../../../../data/offerTaxonomy";

export default function ColorChips({ colors, onToggle }) {
  return (
    <S.Wrap>
      {OFFER_COLOR_OPTIONS.map((color) => (
        <S.Chip
          key={color}
          type="button"
          $active={colors.includes(color)}
          onClick={() => onToggle(color)}
        >
          {color}
        </S.Chip>
      ))}
    </S.Wrap>
  );
}
