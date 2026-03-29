import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 15px;
  border: 2px solid rgba(212, 175, 55, 0.3);
  background: rgba(0, 0, 0, 0.5);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 13px;
  }
`;
