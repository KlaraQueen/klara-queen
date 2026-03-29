import React from "react";
import * as S from "./styled";
import { navbarData } from "../../../data/navbarData";

function SocialMedia() {
  return (
    <S.SocialWrapper>
      {navbarData.socials.map((item) => {
        const Icon = item.icon;
        return (
          <S.SocialIcon
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
          >
            <Icon title={item.label} />
          </S.SocialIcon>
        );
      })}
    </S.SocialWrapper>
  );
}

export default SocialMedia;
