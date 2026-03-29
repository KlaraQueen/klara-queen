import React from "react";
import * as S from "./styled";
import { navbarData } from "../../../data/navbarData";
import { Link } from "react-router-dom";

function Labels({ vertical = false, onItemClick }) {
  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <S.NavLinks $vertical={vertical}>
      {navbarData.labels.map((item, idx) => (
        <S.NavLink
          key={`${item.name}-${idx}`}
          $vertical={vertical}
          onClick={handleClick}
        >
          {item.to ? (
            // Jeśli ma 'to', używamy Linka z routera
            <S.StyledLink as={Link} to={item.to}>
              {item.name}
            </S.StyledLink>
          ) : (
            // Jeśli ma 'url', używamy zwykłego a
            <S.StyledLink href={item.url}>{item.name}</S.StyledLink>
          )}
        </S.NavLink>
      ))}
    </S.NavLinks>
  );
}

export default Labels;
