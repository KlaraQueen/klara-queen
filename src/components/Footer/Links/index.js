import React from "react";
import * as S from "./styled";

function Links({ data }) {
  return (
    <S.LinksColumn>
      <S.SectionTitle>Nawigacja</S.SectionTitle>
      <S.LinksList>
        {data.map((link, index) =>
          link.to ? (
            <S.RouterLink key={index} to={link.to}>
              {link.name}
            </S.RouterLink>
          ) : (
            <S.NavLink key={index} href={link.url}>
              {link.name}
            </S.NavLink>
          ),
        )}
      </S.LinksList>
    </S.LinksColumn>
  );
}

export default Links;
