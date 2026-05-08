import React from "react";
import * as S from "./styled";

/** Podstawowa paleta nazw kolorów — bez odcieni typu łososiowy, koralowy itp. */
const COLORS = [
  "czarny",
  "biały",
  "szary",
  "srebrny",
  "złoty",
  "miedziany",
  "beżowy",
  "kremowy",
  "brązowy",
  "czerwony",
  "bordowy",
  "różowy",
  "pomarańczowy",
  "żółty",
  "zielony",
  "niebieski",
  "błękitny",
  "granatowy",
  "fioletowy",
  "purpurowy",
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
