import styled from "styled-components";
import { theme } from "../../../theme";

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
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

  @media (max-width: ${theme.breakpoints.tablet}px) {
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

export const LinksList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    gap: 12px;
    place-items: center;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 8px;
    place-items: center;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    gap: 6px;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 245, 220, 0.78);
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 1;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  position: relative;
  padding-left: 0;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.8px;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 0 12px rgba(212, 175, 55, 0.25);
  display: inline-block;
  max-width: 100%;
  width: fit-content;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background: ${theme.colors.goldMain};
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${theme.colors.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 16px rgba(212, 175, 55, 0.45);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 0.76rem;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    font-size: 0.7rem;
  }
`;
