import styled from "styled-components";
import { theme } from "../../../theme";

export const NavLinks = styled.ul`
  display: flex;
  align-items: ${(props) => (props.$vertical ? "center" : "center")};
  gap: clamp(10px, 2vw, 40px);
  flex-wrap: nowrap;
  flex-direction: ${(props) => (props.$vertical ? "column" : "row")};
  justify-content: ${(props) => (props.$vertical ? "center" : "center")};
  list-style: none;
  margin: 0;
  padding: ${(props) => (props.$vertical ? "0" : "0 8px")};
  white-space: normal;
  width: auto;

  @media (max-width: 821px) {
    gap: ${(props) => (props.$vertical ? "10px" : "6px 12px")};
    flex-wrap: ${(props) => (props.$vertical ? "nowrap" : "wrap")};
    padding: 0;
    justify-content: ${(props) => (props.$vertical ? "center" : "center")};
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 4px 8px;
  }
`;

export const NavLink = styled.li`
  flex-shrink: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: ${(props) => (props.$vertical ? "center" : "center")};
  gap: 0;
  width: auto;
  color: ${theme.colors.goldHover};
  font-family: ${theme.fonts.main};
  font-weight: ${(props) => (props.$vertical ? 500 : 600)};
  text-transform: uppercase;
  letter-spacing: ${(props) =>
    props.$vertical ? "1.1px" : "clamp(0.7px, 0.1vw, 1.5px)"};
  cursor: pointer;
  font-size: ${(props) =>
    props.$vertical ? "0.9rem" : "clamp(0.64rem, 0.72vw, 0.82rem)"};
  white-space: nowrap;
  text-align: center;
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
    display: none;
  }

  &:not(:last-child)::after {
    content: "";
    display: ${(props) => (props.$vertical ? "block" : "none")};
    position: absolute;
    left: 50%;
    bottom: -7px;
    width: 18px;
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(241, 213, 146, 0.5) 50%,
      transparent 100%
    );
  }

  @media (max-width: 821px) {
    letter-spacing: ${(props) => (props.$vertical ? "1.1px" : "0.8px")};
    font-size: ${(props) => (props.$vertical ? "0.9rem" : "0.66rem")};
    padding: ${(props) => (props.$vertical ? "1px 0" : "4px 7px")};
    white-space: nowrap;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    letter-spacing: ${(props) => (props.$vertical ? "0.9px" : "0.7px")};
    font-size: ${(props) => (props.$vertical ? "0.84rem" : "0.64rem")};
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
