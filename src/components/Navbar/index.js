import React from "react";
import * as S from "./styled";
import Logo from "./Logo/index";
import Labels from "./Labels/index";
import SocialMedia from "./SocialMedia/index";

function Navbar() {
  return (
    <S.NavbarWrapper>
      <S.NavLeft>
        <Logo />
      </S.NavLeft>

      <S.NavCenter>
        <Labels />
      </S.NavCenter>

      <S.NavRight>
        <SocialMedia />
      </S.NavRight>
    </S.NavbarWrapper>
  );
}

export default Navbar;
