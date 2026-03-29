import React from "react";
import * as S from "./styled";
import { footerData } from "../../data/footerData";
import Brand from "./Brand";
import Links from "./Links";
import Social from "./Social";
import Copyright from "./Copyright";

function Footer() {
  const { brand, links, socials, contact } = footerData;

  return (
    <S.FooterContainer>
      <S.FooterContent>
        <Brand data={brand} />
        <Links data={links} />
        <Social data={socials} />
      </S.FooterContent>
      <Copyright data={contact} />
    </S.FooterContainer>
  );
}

export default Footer;
