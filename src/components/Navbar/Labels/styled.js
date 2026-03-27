import styled from "styled-components";
import { theme } from "../../../theme";

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: nowrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    gap: 18px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 12px;
  }
`;

export const NavLink = styled.li`
  flex-shrink: 0;
  color: ${theme.colors.goldHover};
  font-family: ${theme.fonts.main};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 0.9rem;
  text-shadow:
    0 0 1px rgba(255, 255, 255, 0.22),
    0 0 8px rgba(212, 175, 55, 0.2);
  transition:
    color 0.3s ease,
    text-shadow 0.3s ease,
    transform 0.3s ease;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    letter-spacing: 1.4px;
    font-size: 0.82rem;
    white-space: nowrap;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    letter-spacing: 1px;
    font-size: 0.76rem;
  }

  &:hover {
    color: ${theme.colors.white};
    transform: translateY(-1px);
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${theme.colors.goldMain},
      0 0 18px ${theme.colors.goldHover};
  }
`;
