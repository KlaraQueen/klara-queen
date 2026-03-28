import React from "react";
import * as S from "./styled";

function Labels({ vertical = false, onItemClick }) {
  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <S.NavLinks $vertical={vertical}>
      <S.NavLink $vertical={vertical} onClick={handleClick}>Oferta</S.NavLink>
      <S.NavLink $vertical={vertical} onClick={handleClick}>Aktualności</S.NavLink>
      <S.NavLink $vertical={vertical} onClick={handleClick}>Współpraca</S.NavLink>
      <S.NavLink $vertical={vertical} onClick={handleClick}>Opinie</S.NavLink>
      <S.NavLink $vertical={vertical} onClick={handleClick}>O Nas</S.NavLink>
    </S.NavLinks>
  );
}

export default Labels;
