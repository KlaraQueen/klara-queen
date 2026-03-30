import styled from "styled-components";
import { theme } from "../../../../theme";
import { SectionTitle } from "../shared/styled";

export const VideoSection = styled.section`
  animation: fadeInUp 0.6s ease-out 0.3s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(20px, 3vw, 30px);
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.1);

  ${SectionTitle} {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    margin: 0 0 clamp(15px, 2vw, 20px) 0;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid rgba(212, 175, 55, 0.2);
  background: rgba(0, 0, 0, 0.3);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);

  iframe {
    display: block;
    border-radius: 13px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 821px) {
    aspect-ratio: 16 / 9;
  }
`;
