import React from "react";
import * as S from "./styled";

const COLORS = [
  "złoty",
  "bordowy",
  "srebrny",
  "biały",
  "czarny",
  "pastelowy",
  "granatowy",
  "różowy",
  "zielony",
  "wielokolorowy",
];

export default function ColorChips({ colors, onToggle }) {
  return (
    <S.Wrap>
      {COLORS.map((color) => (
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
