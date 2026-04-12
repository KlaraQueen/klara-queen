import React from "react";
import * as S from "./styled";
import { navbarData } from "../../../data/navbarData";
import { Link } from "react-router-dom";

function Labels({ variant = "bar", onItemClick }) {
  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  const NavList = variant === "drawer" ? S.NavLinksDrawer : S.NavLinksBar;
  const NavItem = variant === "drawer" ? S.NavLinkDrawer : S.NavLinkBar;

  return (
    <NavList>
      {navbarData.labels.map((item, idx) => (
        <NavItem key={`${item.name}-${idx}`} onClick={handleClick}>
          {item.to ? (
            <S.StyledLink as={Link} to={item.to}>
              {item.name}
            </S.StyledLink>
          ) : (
            <S.StyledLink href={item.url}>{item.name}</S.StyledLink>
          )}
        </NavItem>
      ))}
    </NavList>
  );
}

export default Labels;
