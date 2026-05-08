import React from "react";
import * as S from "./styled";
import { youtubeUrlToEmbedUrl } from "../../../../utils/youtubeEmbed";

const VideoSection = ({ youtubeUrl, title }) => {
  const embedSrc = youtubeUrlToEmbedUrl(youtubeUrl);
  if (!embedSrc) return null;

  return (
    <S.VideoContainer>
      <iframe
        src={embedSrc}
        title={title ? `${title} — film` : "Film prezentacji"}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </S.VideoContainer>
  );
};

export default VideoSection;
