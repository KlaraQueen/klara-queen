import styled from "styled-components";
import { theme } from "../../../../theme";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 0 clamp(14px, 3vw, 30px);
  border-radius: 28px;
  border: 1px solid ${theme.colors.goldSoft12};
  background: linear-gradient(
    135deg,
    ${theme.colors.surfaceStrong} 0%,
    ${theme.colors.surfaceMid} 100%
  );
  backdrop-filter: blur(10px);
  box-shadow:
    inset 0 1px 0 ${theme.colors.goldSoft08},
    inset 0 -1px 0 ${theme.colors.shadowLight},
    0 2px 4px ${theme.colors.shadowLight},
    0 8px 16px ${theme.colors.shadowLight},
    0 20px 40px ${theme.colors.shadowMedium},
    0 0 0 1px ${theme.colors.goldSoft06};
  overflow: hidden;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${(props) => (props.isLink ? "pointer" : "default")};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${theme.colors.navDividerGold50} 50%,
      transparent 100%
    );
    pointer-events: none;
  }

  &:hover {
    border-color: ${theme.colors.goldSoft20};
    transform: translateY(-8px);
    background: linear-gradient(
      135deg,
      ${theme.colors.panelFormMid} 0%,
      ${theme.colors.panelFormEnd} 100%
    );
    backdrop-filter: blur(10px);
    box-shadow:
      0 4px 8px ${theme.colors.shadowLight},
      0 12px 28px ${theme.colors.shadowMedium},
      0 28px 56px ${theme.colors.shadowHeavy},
      0 0 20px ${theme.colors.goldSoft15},
      inset 0 1px 0 ${theme.colors.goldSoft12},
      0 0 0 1px ${theme.colors.goldSoft12};
  }
`;

export const DeviceWrapper = styled.div`
  width: 100%;
  height: clamp(110px, 18vw, 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  overflow: hidden;
  background: transparent;
  border-radius: 0;
  border: none;
  box-shadow: none;
  flex-shrink: 0;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(1) saturate(1);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;

  ${CardContainer}:hover & {
    filter: brightness(1.05) saturate(1.1);
    transform: scale(1.03);
  }
`;

export const IconCircle = styled.div`
  width: clamp(32px, 5.5vw, 42px);
  height: clamp(32px, 5.5vw, 42px);
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    ${theme.colors.goldHover} 0%,
    ${theme.colors.goldMain} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.deepBlack};
  font-size: clamp(0.75rem, 1.2vw, 1.1rem);
  margin-top: clamp(-16px, -2.5vw, -21px);
  z-index: 2;
  flex-shrink: 0;
  box-shadow:
    0 8px 16px ${theme.colors.shadowMedium},
    0 0 12px ${theme.colors.goldSoft25},
    inset 0 1px 0 ${theme.colors.goldSoft20};
`;

export const ProjectTitle = styled.h3`
  color: ${theme.colors.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(0.6px, 0.18vw, 2px);
  font-size: clamp(0.72rem, 2.1vw, 1.05rem);
  font-weight: 600;
  line-height: 1.05;
  margin: clamp(8px, 1.5vw, 12px) clamp(8px, 2vw, 20px) clamp(4px, 1vw, 8px);
  text-align: center;
  text-shadow:
    0 0 12px ${theme.colors.goldSoft20},
    0 2px 8px ${theme.colors.shadowLight};
  flex-shrink: 0;
`;

export const ProjectDescription = styled.p`
  color: ${theme.colors.textMuted};
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const GoldLine = styled.div`
  width: 44px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${theme.colors.goldMain} 50%,
    transparent 100%
  );
  margin-top: 14px;
  opacity: 0.65;
  flex-shrink: 0;
`;
