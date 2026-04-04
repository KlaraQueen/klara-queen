import styled from "styled-components";
import { theme } from "../../../theme";

export const NavLinks = styled.ul`
  display: flex;
  align-items: ${(props) => (props.$vertical ? "center" : "center")};
  gap: clamp(4px, 1.5vw, 30px);
  flex-wrap: nowrap;
  flex-direction: ${(props) => (props.$vertical ? "column" : "row")};
  justify-content: ${(props) => (props.$vertical ? "center" : "center")};
  list-style: none;
  margin: 0;
  padding: ${(props) => (props.$vertical ? "0" : "0 8px")};
  white-space: nowrap;
  width: auto;
  min-width: 0;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    gap: ${(props) => (props.$vertical ? "16px" : "clamp(3px, 0.8vw, 8px)")};
    padding: 0;
    justify-content: ${(props) => (props.$vertical ? "center" : "center")};
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: ${(props) => (props.$vertical ? "14px" : "clamp(2px, 0.6vw, 5px)")};
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
    props.$vertical ? "1.1px" : "clamp(0.5px, 0.08vw, 1px)"};
  cursor: pointer;
  font-size: ${(props) =>
    props.$vertical ? "0.9rem" : "clamp(0.48rem, 1.2vw, 0.90rem)"};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${(props) => (props.$vertical ? "2px 0" : "clamp(2px, 0.3vw, 4px) clamp(4px, 0.7vw, 7px)")};
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
    bottom: -9px;
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

  @media (max-width: ${theme.breakpoints.tablet}px) {
    letter-spacing: ${(props) => (props.$vertical ? "1.1px" : "0.6px")};
    font-size: ${(props) => (props.$vertical ? "0.9rem" : "clamp(0.48rem, 0.9vw, 0.68rem)")};
    padding: ${(props) => (props.$vertical ? "1px 0" : "clamp(2px, 0.2vw, 3px) clamp(3px, 0.5vw, 5px)")};
    white-space: nowrap;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    letter-spacing: ${(props) => (props.$vertical ? "0.9px" : "0.5px")};
    font-size: ${(props) => (props.$vertical ? "0.84rem" : "clamp(0.44rem, 0.75vw, 0.56rem)")};
    padding: ${(props) => (props.$vertical ? "1px 0" : "clamp(2px, 0.1vw, 3px) clamp(3px, 0.4vw, 5px)")};
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

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: inherit;
`;
