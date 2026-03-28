import styled from "styled-components";
import { theme } from "../../../../theme";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 0 clamp(14px, 3vw, 30px);
  border-radius: 18px;
  border: 1px solid rgba(212, 175, 55, 0.24);
  background: linear-gradient(
    160deg,
    rgba(132, 22, 44, 0.36) 0%,
    rgba(46, 8, 16, 0.82) 40%,
    rgba(13, 0, 3, 0.98) 100%
  );
  box-shadow:
    inset 0 1px 0 rgba(255, 245, 220, 0.09),
    inset 0 -1px 0 rgba(0, 0, 0, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.28),
    0 8px 16px rgba(0, 0, 0, 0.36),
    0 20px 40px rgba(0, 0, 0, 0.38),
    0 0 0 1px rgba(212, 175, 55, 0.06),
    0 0 28px rgba(122, 20, 40, 0.18);
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
      rgba(241, 213, 146, 0.55) 50%,
      transparent 100%
    );
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(241, 213, 146, 0.62);
    transform: ${(props) => (props.isLink ? "translateY(-8px)" : "none")};
    background: linear-gradient(
      160deg,
      rgba(155, 30, 58, 0.44) 0%,
      rgba(56, 12, 22, 0.88) 40%,
      rgba(13, 0, 3, 1) 100%
    );
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.32),
      0 12px 28px rgba(0, 0, 0, 0.46),
      0 28px 56px rgba(0, 0, 0, 0.5),
      0 0 32px rgba(212, 175, 55, 0.16),
      0 0 60px rgba(122, 20, 40, 0.2),
      inset 0 1px 0 rgba(255, 245, 220, 0.12),
      0 0 0 1px rgba(212, 175, 55, 0.1);
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
  background: rgba(0, 0, 0, 0.25);
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
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;

  ${CardContainer}:hover & {
    filter: brightness(1) saturate(1);
    transform: scale(1.03);
  }
`;

export const IconCircle = styled.div`
  width: clamp(32px, 5.5vw, 42px);
  height: clamp(32px, 5.5vw, 42px);
  border-radius: 50%;
  background: linear-gradient(180deg, #f4d98b 0%, #c8960e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1a0005;
  font-size: clamp(0.75rem, 1.2vw, 1.1rem);
  margin-top: clamp(-16px, -2.5vw, -21px);
  z-index: 2;
  flex-shrink: 0;
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.38),
    0 0 12px rgba(212, 175, 55, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
`;

export const ProjectTitle = styled.h3`
  color: ${theme.colors.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(0.6px, 0.18vw, 2px);
  font-size: clamp(0.88rem, 2.8vw, 1.35rem);
  font-weight: 600;
  line-height: 1.05;
  margin: clamp(10px, 2vw, 14px) clamp(8px, 2vw, 20px) clamp(4px, 1vw, 8px);
  text-align: center;
  text-shadow:
    0 0 12px rgba(212, 175, 55, 0.22),
    0 2px 8px rgba(0, 0, 0, 0.3);
`;

export const ProjectDescription = styled.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
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
`;
