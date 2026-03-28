import styled from "styled-components";
import { theme } from "../../../theme";

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: clamp(10px, 2vw, 40px);
  flex-wrap: nowrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0 8px;
  white-space: normal;

  @media (max-width: 821px) {
    gap: 6px 12px;
    flex-wrap: wrap;
    padding: 0;
    justify-content: center;
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 4px 8px;
  }
`;

export const NavLink = styled.li`
  flex-shrink: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.goldHover};
  font-family: ${theme.fonts.main};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: clamp(0.7px, 0.1vw, 1.5px);
  cursor: pointer;
  font-size: clamp(0.64rem, 0.72vw, 0.82rem);
  white-space: nowrap;
  line-height: 1;
  padding: 5px 9px;
  border-radius: 10px;
  border: 1px solid rgba(241, 213, 146, 0.26);
  background: linear-gradient(
    180deg,
    rgba(255, 245, 214, 0.04) 0%,
    rgba(30, 8, 14, 0.2) 100%
  );
  text-shadow:
    0 0 1px rgba(255, 255, 255, 0.22),
    0 0 8px rgba(212, 175, 55, 0.2);
  transition:
    border-color 0.3s ease,
    background 0.3s ease,
    color 0.3s ease,
    text-shadow 0.3s ease,
    transform 0.3s ease;

  @media (max-width: 821px) {
    letter-spacing: 0.8px;
    font-size: 0.66rem;
    padding: 4px 7px;
    white-space: nowrap;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    letter-spacing: 0.7px;
    font-size: 0.64rem;
    padding: 4px 6px;
  }

  &:hover {
    color: ${theme.colors.white};
    transform: translateY(-1px);
    border-color: rgba(241, 213, 146, 0.48);
    background: linear-gradient(
      180deg,
      rgba(255, 245, 214, 0.08) 0%,
      rgba(44, 12, 22, 0.28) 100%
    );
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${theme.colors.goldMain},
      0 0 18px ${theme.colors.goldHover};
  }
`;
