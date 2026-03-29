import React from "react";
import * as S from "./styled";

const VideoSection = ({ youtubeUrl, title }) => {
  return (
    <S.VideoContainer>
      <iframe
        width="560"
        height="315"
        src={youtubeUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </S.VideoContainer>
  );
};

export default VideoSection;
