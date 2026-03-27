import styled from "styled-components";
import { theme } from "../../theme";
import logoImage from "../../image/znak-wodny.png";

export const NavbarWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  z-index: 20;
`;

export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NavRight = styled.div`
  flex: 1;
`;

export const Logo = styled.img.attrs({ src: logoImage, alt: "Logo" })`
  display: block;
  height: 88px;
  width: auto;
  cursor: pointer;
  filter: brightness(4)
    drop-shadow(${theme.shadows.logo} ${theme.colors.goldStrong});
  transition:
    transform 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-1px) scale(1.02);
    filter: brightness(4.3)
      drop-shadow(${theme.shadows.logoHover} ${theme.colors.goldStrong});
  }
`;

export const NavLinks = styled.ul`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 48px;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 25;
`;

export const NavLink = styled.li`
  font-family: "Segoe UI", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.goldSoft};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.goldHover};
  }
`;
