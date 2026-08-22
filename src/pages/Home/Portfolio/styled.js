import styled from "styled-components";
import { theme } from "../../../theme";

export const PortfolioSection = styled.section`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 12px;
  padding-left: clamp(16px, 4vw, 60px);
  padding-right: clamp(16px, 4vw, 60px);
  background:
    radial-gradient(
      ellipse at 80% 0%,
      ${theme.colors.bordoSoft35} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      ${theme.colors.bordoSoft25} 0%,
      transparent 55%
    ),
    linear-gradient(
      180deg,
      ${theme.colors.panelTableMid} 0%,
      ${theme.colors.panelTableEnd} 34%
    );
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${theme.breakpoints.phone}px) {
    margin-top: -8px;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SectionTitle = styled.h2`
  color: ${theme.colors.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.22vw, 3px);
  font-size: clamp(1.8rem, 4vw, 3.1rem);
  font-weight: 600;
  line-height: 1.3;
  text-shadow:
    0 0 2px ${theme.colors.goldSoft20},
    0 0 14px ${theme.colors.goldSoft18},
    0 12px 28px ${theme.colors.shadowLight};
  margin: 0;
`;

export const Subtitle = styled.p`
  color: ${theme.colors.textMuted};
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  font-size: clamp(0.62rem, 0.78vw, 0.72rem);
  letter-spacing: clamp(2.8px, 0.38vw, 4.8px);
  text-transform: uppercase;
  line-height: 1;
  max-width: 480px;
  position: relative;
  padding: 0 18px;
  margin: 0 auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: clamp(18px, 2.4vw, 36px);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${theme.colors.goldSoft40} 100%
    );
  }

  &::before {
    right: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${theme.colors.goldSoft40} 100%
    );
  }

  &::after {
    left: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      ${theme.colors.goldSoft40} 0%,
      transparent 100%
    );
  }
`;

export const SliderOuter = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
  margin-top: 0;
`;

export const Track = styled.div`
  flex: 1;
  display: flex;
  gap: clamp(12px, 1.6vw, 20px);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 8px 0 0 0;
  margin: 0;
  align-items: stretch;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardSlot = styled.div`
  flex: 0 0 calc(25% - 15px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;
  align-items: stretch;
  height: 100%;
  padding: 0;
  margin: 0;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }
`;

export const ArrowButton = styled.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: ${theme.colors.surfaceStrong};
  border: 1px solid ${theme.colors.navBorderGold38};
  color: ${theme.colors.goldMain};
  font-size: clamp(0.85rem, 1.1vw, 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: none;

  &:hover {
    background: linear-gradient(
      180deg,
      ${theme.colors.goldHover} 0%,
      ${theme.colors.goldMain} 100%
    );
    border-color: ${theme.colors.goldHover};
    color: ${theme.colors.deepBlack};
    box-shadow: none;
    transform: scale(1.08);
  }
`;

export const StatusLine = styled.p`
  margin: 0 0 clamp(12px, 2vw, 20px);
  text-align: center;
  font-size: clamp(0.88rem, 1.5vw, 0.98rem);
  color: ${theme.colors.textFaded};
  font-family: "Manrope", "Segoe UI", sans-serif;
`;

export const ViewAllContainer = styled.div`
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover div {
    width: 100px;
  }
`;

export const ViewAllText = styled.span`
  color: ${theme.colors.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`;

export const ViewAllLine = styled.div`
  width: 50px;
  height: 1px;
  background: ${theme.colors.goldMain};
  transition: width 0.4s ease;
`;
