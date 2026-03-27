import React from "react";
import * as S from "./styled";

function Navbar() {
  return (
    <S.NavbarWrapper>
      <S.NavLeft>
        <S.Logo />
      </S.NavLeft>
      <S.NavLinks>
        <S.NavLink>Oferta ▾</S.NavLink>
        <S.NavLink>Opinie</S.NavLink>
        <S.NavLink>Kontakt</S.NavLink>
      </S.NavLinks>
      <S.NavRight />
    </S.NavbarWrapper>
  );
}

export default Navbar;
