import styled from "styled-components";
import { theme } from "../../../theme";

export const ShowcaseWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: clamp(240px, 28vw, 340px);
  z-index: 5;
  padding: clamp(10px, 1.3vw, 16px);
  margin: 0 auto 0;

  @media (max-width: 1050px) {
    height: clamp(220px, 24vw, 320px);
    padding: clamp(9px, 1.2vw, 14px);
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: clamp(8px, 1.2vw, 12px);
    margin: 0 auto 0;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: clamp(6px, 1vw, 10px);
  }
`;

export const CardsViewport = styled.div`
  --offset-distance: clamp(90px, 11vw, 140px);
  --edge-offset-distance: clamp(150px, 18vw, 240px);
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 1050px) {
    --offset-distance: clamp(72px, 9vw, 110px);
    --edge-offset-distance: clamp(116px, 14vw, 170px);
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    --offset-distance: 68px;
    --edge-offset-distance: 112px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    --offset-distance: 56px;
    --edge-offset-distance: 98px;
  }
`;

export const SlideCard = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(210px, 28vw, 360px);
  height: clamp(150px, 21vw, 250px);
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.$active ? "rgba(241, 213, 146, 0.8)" : "rgba(255, 255, 255, 0.08)"};
  object-fit: cover;
  opacity: ${(props) => {
    const abs = Math.abs(props.$offset);
    if (abs === 0) return 1;
    if (abs === 1) return 0.88;
    if (abs === 2) return 0.52;
    return 0;
  }};
  z-index: ${(props) => 30 - Math.abs(props.$offset) * 10};
  filter: ${(props) =>
    props.$active
      ? "brightness(1) saturate(1)"
      : "brightness(0.7) saturate(0.72)"};
  transform: ${(props) => {
    const abs = Math.abs(props.$offset);
    const scale = abs === 0 ? 1 : abs === 1 ? 0.8 : 0.64;
    const distance =
      abs === 2 ? "var(--edge-offset-distance)" : "var(--offset-distance)";
    return `translate(-50%, -50%) translateX(calc(${props.$offset} * ${distance})) scale(${scale})`;
  }};
  box-shadow: ${(props) =>
    props.$active
      ? `0 28px 50px rgba(0, 0, 0, 0.45), 0 0 20px ${theme.colors.goldSoft18}`
      : "0 16px 26px rgba(0, 0, 0, 0.3)"};
  transition:
    transform 0.75s ease,
    opacity 0.75s ease,
    filter 0.75s ease,
    box-shadow 0.75s ease,
    border-color 0.75s ease;

  @media (max-width: 1050px) {
    width: clamp(180px, 23vw, 300px);
    height: clamp(130px, 17vw, 210px);
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    width: 260px;
    height: 182px;
  }
`;
