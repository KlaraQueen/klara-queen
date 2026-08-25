import React from "react";
import * as S from "./styled";

const aboutStats = [
  {
    id: 1,
    label: "Selekcja",
    value: "1",
    description: "Autorskie szablony zaprojektowane pod luksusowe marki.",
  },
  {
    id: 2,
    label: "Szybkość",
    value: "2",
    description: "Twoja obecność online w 4 dni robocze.",
  },
  {
    id: 3,
    label: "Spójność",
    value: "3",
    description: "Gwarancja doskonałego wyglądu na każdym urządzeniu.",
  },
];

const Stats = () => (
  <S.StatsGrid>
    {aboutStats.map((stat) => (
      <S.StatBox key={stat.id}>
        <S.Value>{stat.value}</S.Value>
        <S.Label>{stat.label}</S.Label>
        <S.Description>{stat.description}</S.Description>
      </S.StatBox>
    ))}
  </S.StatsGrid>
);

export default Stats;
