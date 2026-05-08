import React from "react";
import * as S from "./styled";
import { SectionTitle } from "../shared/styled";
import { youtubeUrlToEmbedUrl } from "../../../../utils/youtubeEmbed";

const VideoSectionComponent = ({ title, youtubeUrl }) => {
  const embedSrc = youtubeUrlToEmbedUrl(youtubeUrl);
  if (!embedSrc) return null;

  return (
    <S.VideoSection>
      <SectionTitle>{title}</SectionTitle>
      <S.VideoContainer>
        <S.StyledIframe
          src={embedSrc}
          title={typeof title === "string" ? title : "Film YouTube"}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </S.VideoContainer>
    </S.VideoSection>
  );
};

export default VideoSectionComponent;
