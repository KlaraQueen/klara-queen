import styled from "styled-components";
import { theme } from "../../../theme";

export const HeroWrapper = styled.div`
  position: absolute;
  top: 18%;
  left: clamp(24px, 7vw, 96px);
  transform: none;
  text-align: left;
  z-index: 10;
  width: min(680px, calc(100vw - 48px));
  padding: 20px 0;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    top: 20%;
    left: 24px;
    width: min(620px, calc(100vw - 48px));
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    top: 22%;
    left: 16px;
    width: calc(100vw - 32px);
  }
`;

export const HeroOverline = styled.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: rgba(255, 242, 214, 0.92);
  text-transform: uppercase;
  letter-spacing: 3.6px;
  font-size: 0.82rem;
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: ${theme.breakpoints.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 2.4px;
    margin-bottom: 12px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${theme.colors.goldHover};
  font-weight: 600;
  letter-spacing: -0.3px;
  font-size: clamp(1.9rem, 4.1vw, 3.5rem);
  line-height: 0.94;
  text-shadow:
    0 0 2px rgba(255, 246, 220, 0.35),
    0 0 14px rgba(212, 175, 55, 0.22),
    0 10px 24px rgba(0, 0, 0, 0.24);

  @media (max-width: ${theme.breakpoints.tablet}px) {
    letter-spacing: -1px;
    line-height: 1;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(1.9rem, 10vw, 3rem);
    line-height: 1.04;
  }
`;

export const HeroDescription = styled.p`
  margin: 0;
  max-width: 640px;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: 0.98rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 1.5;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.28);

  @media (max-width: ${theme.breakpoints.tablet}px) {
    max-width: 560px;
    font-size: 1rem;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    max-width: 100%;
    font-size: 0.95rem;
    line-height: 1.45;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 12px;
    margin-top: 22px;
    flex-wrap: wrap;
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
  letter-spacing: 1.1px;
  font-size: 0.88rem;
  font-weight: 700;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,
    color 0.3s ease, border-color 0.3s ease;

  @media (max-width: ${theme.breakpoints.phone}px) {
    min-height: 46px;
    padding: 0 18px;
    font-size: 0.82rem;
  }
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  color: #2a1303;
  background: linear-gradient(180deg, #f4d98b 0%, #d6ab3f 100%);
  box-shadow:
    0 10px 24px rgba(109, 64, 5, 0.28),
    inset 0 1px 0 rgba(255, 248, 219, 0.7);

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      0 14px 30px rgba(109, 64, 5, 0.34),
      0 0 18px rgba(212, 175, 55, 0.28),
      inset 0 1px 0 rgba(255, 248, 219, 0.8);
  }
`;

export const SecondaryButton = styled.a`
  ${buttonBase}
  color: rgba(255, 246, 220, 0.92);
  background: rgba(53, 13, 19, 0.22);
  border: 1px solid rgba(241, 213, 146, 0.58);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 10px 24px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: translateY(-1px);
    color: ${theme.colors.white};
    border-color: rgba(241, 213, 146, 0.78);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.2),
      0 0 18px rgba(212, 175, 55, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  }
`;
