import styled from "styled-components";
import { theme } from "../../../theme";

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 12px;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    gap: 10px;
  }
`;

export const SectionTitle = styled.h4`
  color: ${theme.colors.goldHover};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.82rem;
  font-weight: 600;
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  position: relative;
  padding-bottom: 0;
  display: inline-block;
  opacity: 0.95;

  @media (max-width: ${theme.breakpoints.phone}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`;

export const SocialIconsRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    justify-content: center;
    gap: 28px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 16px;
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    gap: 12px;
  }
`;

export const SocialItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${theme.colors.white};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 0.8;

  svg {
    font-size: 1.6rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.15));
    color: ${theme.colors.goldMain};
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45px;
    height: 45px;
    background: radial-gradient(
      circle,
      rgba(212, 175, 55, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-6px);
    opacity: 1;
    color: ${theme.colors.white};

    svg {
      transform: scale(1.12);
      color: ${theme.colors.goldHover};
      filter: drop-shadow(0 6px 12px rgba(212, 175, 55, 0.3));
    }

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 6px;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    gap: 5px;

    svg {
      font-size: 1.2rem;
    }
  }
`;

export const SocialLabel = styled.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${theme.colors.white};
  opacity: 0.75;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${theme.breakpoints.phone}px) {
    font-size: 0.58rem;
    letter-spacing: 1px;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    font-size: 0.54rem;
  }
`;
