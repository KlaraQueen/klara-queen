import React from "react";
import * as S from "./styled";

function Social({ data }) {
  return (
    <S.SocialColumn>
      <S.SectionTitle>Nasze Kanały</S.SectionTitle>
      <S.SocialIconsRow>
        {data.map((social) => (
          <S.SocialItem
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon />
            <S.SocialLabel>{social.label}</S.SocialLabel>
          </S.SocialItem>
        ))}
      </S.SocialIconsRow>
    </S.SocialColumn>
  );
}

export default Social;
