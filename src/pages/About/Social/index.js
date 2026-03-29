import React from "react";
import * as S from "./styled";
import { aboutSocial } from "../../../data/aboutData";
import { socialMediaData } from "../../../data/socialMediaData";

const Social = () => {
  return (
    <S.SocialSection>
      <S.SectionTitle>{aboutSocial.title}</S.SectionTitle>
      <S.Description>{aboutSocial.description}</S.Description>

      <S.PlatformsGrid>
        {aboutSocial.platforms.map((platform) => {
          const socialIcon = socialMediaData.find(
            (social) => social.label === platform.name,
          );

          return (
            <S.PlatformCard
              key={platform.id}
              href={socialIcon?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>{socialIcon && <socialIcon.icon />}</S.IconWrapper>
              <S.PlatformName>{platform.name}</S.PlatformName>
              <S.PlatformDescription>
                {platform.description}
              </S.PlatformDescription>
            </S.PlatformCard>
          );
        })}
      </S.PlatformsGrid>
    </S.SocialSection>
  );
};

export default Social;
