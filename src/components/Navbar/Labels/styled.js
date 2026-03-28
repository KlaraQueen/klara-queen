import styled from "styled-components";
import { theme } from "../../../theme";

export const NavLinks = styled.ul`
  display: flex;
  align-items: ${(props) => (props.$vertical ? "flex-start" : "center")};
  gap: clamp(10px, 2vw, 40px);
  flex-wrap: nowrap;
  flex-direction: ${(props) => (props.$vertical ? "column" : "row")};
  justify-content: ${(props) => (props.$vertical ? "flex-start" : "center")};
  list-style: none;
  margin: 0;
  padding: ${(props) => (props.$vertical ? "0" : "0 8px")};
  white-space: normal;
  width: auto;

  @media (max-width: 821px) {
    gap: ${(props) => (props.$vertical ? "6px" : "6px 12px")};
    flex-wrap: ${(props) => (props.$vertical ? "nowrap" : "wrap")};
    padding: 0;
    justify-content: ${(props) => (props.$vertical ? "flex-start" : "center")};
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
  justify-content: ${(props) => (props.$vertical ? "flex-start" : "center")};
  gap: ${(props) => (props.$vertical ? "8px" : "0")};
  width: auto;
  color: ${theme.colors.goldHover};
  font-family: ${theme.fonts.main};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: clamp(0.7px, 0.1vw, 1.5px);
  cursor: pointer;
  font-size: clamp(0.64rem, 0.72vw, 0.82rem);
  white-space: nowrap;
  line-height: 1;
  padding: ${(props) => (props.$vertical ? "2px 0" : "5px 9px")};
  border-radius: 10px;
  border: ${(props) =>
    props.$vertical ? "none" : "1px solid rgba(241, 213, 146, 0.26)"};
  background: ${(props) =>
    props.$vertical
      ? "transparent"
      : "linear-gradient(180deg, rgba(255, 245, 214, 0.04) 0%, rgba(30, 8, 14, 0.2) 100%)"};
  text-shadow:
    0 0 1px rgba(255, 255, 255, 0.22),
    0 0 8px rgba(212, 175, 55, 0.2);
  transition:
    border-color 0.3s ease,
    background 0.3s ease,
    color 0.3s ease,
    text-shadow 0.3s ease,
    transform 0.3s ease;

  &::before {
    content: "";
    display: ${(props) => (props.$vertical ? "inline-block" : "none")};
    width: 7px;
    height: 7px;
    transform: rotate(45deg);
    border: 1px solid rgba(241, 213, 146, 0.72);
    background: linear-gradient(
      145deg,
      rgba(255, 247, 220, 0.95) 0%,
      rgba(212, 175, 55, 0.9) 100%
    );
    box-shadow:
      0 0 8px rgba(241, 213, 146, 0.32),
      inset 0 0 1px rgba(255, 255, 255, 0.85);
    flex: 0 0 7px;
  }

  @media (max-width: 821px) {
    letter-spacing: 0.8px;
    font-size: 0.66rem;
    padding: ${(props) => (props.$vertical ? "1px 0" : "4px 7px")};
    white-space: nowrap;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    letter-spacing: 0.7px;
    font-size: 0.64rem;
    padding: ${(props) => (props.$vertical ? "1px 0" : "4px 6px")};
  }

  &:hover {
    color: ${theme.colors.white};
    transform: translateY(-1px);
    border-color: ${(props) =>
      props.$vertical ? "transparent" : "rgba(241, 213, 146, 0.48)"};
    background: ${(props) =>
      props.$vertical
        ? "transparent"
        : "linear-gradient(180deg, rgba(255, 245, 214, 0.08) 0%, rgba(44, 12, 22, 0.28) 100%)"};
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${theme.colors.goldMain},
      0 0 18px ${theme.colors.goldHover};
  }
`;
