import styled from "styled-components";
import { theme } from "../../../theme";

export const HeroWrapper = styled.div`
  position: relative;
  top: auto;
  left: auto;
  transform: none;
  text-align: left;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: clamp(10px, 1.3vw, 16px);
  margin: 0;

  @media (max-width: 1050px) {
    padding: clamp(9px, 1.2vw, 14px);
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: -20px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    padding: 0 2px;
  }
`;

export const HeroOverline = styled.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: ${theme.colors.goldHover};
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.2vw, 2.2px);
  font-size: clamp(0.62rem, 0.9vw, 0.82rem);
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px ${theme.colors.shadowLight};

  @media (max-width: ${theme.breakpoints.tablet}px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${theme.colors.goldHover};
  font-weight: 600;
  letter-spacing: 0;
  text-rendering: optimizeLegibility;
  font-kerning: normal;
  font-size: clamp(1.05rem, 3.1vw, 2.7rem);
  line-height: 1.3;
  text-shadow:
    0 0 2px ${theme.colors.goldSoft20},
    0 0 14px ${theme.colors.goldSoft20},
    0 10px 24px ${theme.colors.shadowLight};

  @media (max-width: 1050px) {
    font-size: clamp(1rem, 2.7vw, 2.2rem);
    letter-spacing: 0;
    line-height: 1;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: clamp(0.95rem, 3.2vw, 1.95rem);
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: 1;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(0.9rem, 5.2vw, 1.6rem);
    line-height: 1.1;
  }
`;

export const HeroDescription = styled.p`
  margin: 0;
  max-width: 640px;
  color: ${theme.colors.textMuted};
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.78rem, 1vw, 0.92rem);
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 1.5;
  text-shadow: 0 3px 12px ${theme.colors.shadowLight};

  @media (max-width: 1050px) {
    font-size: clamp(0.75rem, 0.95vw, 0.86rem);
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    max-width: 560px;
    font-size: clamp(0.74rem, 1.8vw, 0.84rem);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    max-width: 100%;
    font-size: clamp(0.72rem, 3.4vw, 0.8rem);
    line-height: 1.45;
    text-align: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 8px;
    margin-top: 22px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 14px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.9px;
  font-size: clamp(0.68rem, 0.8vw, 0.82rem);
  font-weight: 700;
  white-space: nowrap;
  flex: 0 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,
    color 0.3s ease, border-color 0.3s ease;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    min-height: 42px;
    padding: 0 14px;
    font-size: 0.74rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    min-height: 40px;
    padding: 0 12px;
    font-size: 0.7rem;
    letter-spacing: 0.7px;
  }
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  color: ${theme.colors.deepBlack};
  background: linear-gradient(
    180deg,
    ${theme.colors.goldHover} 0%,
    ${theme.colors.goldMain} 100%
  );
  box-shadow:
    0 10px 24px ${theme.colors.goldSoft30},
    inset 0 1px 0 ${theme.colors.goldSoft25};

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      0 14px 30px ${theme.colors.goldSoft40},
      0 0 18px ${theme.colors.goldSoft30},
      inset 0 1px 0 ${theme.colors.goldSoft30};
  }
`;

export const SecondaryButton = styled.a`
  ${buttonBase}
  color: ${theme.colors.textMuted};
  background: ${theme.colors.surfaceSoft};
  border: 1px solid ${theme.colors.navBorderGold48};
  box-shadow:
    inset 0 0 0 1px ${theme.colors.goldSoft04},
    0 10px 24px ${theme.colors.shadowLight};

  &:hover {
    transform: translateY(-1px);
    color: ${theme.colors.white};
    border-color: ${theme.colors.goldHover};
    box-shadow:
      0 14px 30px ${theme.colors.shadowMedium},
      0 0 18px ${theme.colors.goldSoft20},
      inset 0 0 0 1px ${theme.colors.goldSoft06};
  }
`;
