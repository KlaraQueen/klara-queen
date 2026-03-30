import React from "react";
import * as S from "./styled";
import { SectionTitle } from "../shared/styled";

const VideoSectionComponent = ({ title, youtubeUrl }) => {
  return (
    <S.VideoSection>
      <SectionTitle>{title}</SectionTitle>
      <S.VideoContainer>
        <S.StyledIframe
          src={youtubeUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></S.StyledIframe>
      </S.VideoContainer>
    </S.VideoSection>
  );
};

export default VideoSectionComponent;
