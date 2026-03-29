import React from "react";
import * as S from "./styled";
import { aboutStats } from "../../../data/aboutData";

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
