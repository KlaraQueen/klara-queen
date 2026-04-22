import styled from "styled-components";
import { theme } from "../../../theme";

export const FAQSection = styled.section`
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
      ${theme.colors.panelTableEnd} 30%
    );
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const SectionSubtitle = styled.p`
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

export const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(12px, 1.6vw, 20px);
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const FAQCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${theme.colors.surfaceStrong} 0%,
    ${theme.colors.surfaceMid} 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.goldSoft12};
  box-shadow:
    inset 0 1px 0 ${theme.colors.goldSoft08},
    inset 0 -1px 0 ${theme.colors.shadowLight},
    0 0 0 1px ${theme.colors.goldSoft06};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: clamp(14px, 2vw, 20px);
  cursor: pointer;
  margin: 0;

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
    z-index: 1;
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
      inset 0 1px 0 ${theme.colors.goldSoft12},
      0 0 0 1px ${theme.colors.goldSoft12};
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  margin: 0;
  padding: 0;
`;

export const QuestionText = styled.h3`
  color: ${theme.colors.goldHover};
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.95rem, 1.2vw, 1.15rem);
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &::before {
    content: "Q";
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: clamp(24px, 3vw, 32px);
    height: clamp(24px, 3vw, 32px);
    background: ${theme.colors.goldSoft15};
    border-radius: 50%;
    font-size: clamp(0.9rem, 1.1vw, 1rem);
    border: 1px solid ${theme.colors.goldSoft30};
  }
`;

export const AnswerText = styled.p`
  color: ${theme.colors.textMuted};
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.8rem, 0.95vw, 0.9rem);
  line-height: 1.5;
  margin: clamp(10px, 1.2vw, 15px) 0 0 0;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition:
    opacity 0.3s ease,
    max-height 0.3s ease;
`;

export const ToggleIcon = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: ${theme.colors.goldHover};
  font-size: clamp(0.9rem, 1.1vw, 1.2rem);
  margin-left: auto;
  flex-shrink: 0;
`;
