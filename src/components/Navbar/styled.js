import styled from "styled-components";
import { theme } from "../../theme";
import logoImage from "../../image/znak-wodny.png";

export const NavbarWrapper = styled.nav`
  --uiScale: ${theme.layout.navbar.uiScale.base};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: ${theme.layout.navbar.padding.base};
  z-index: 20;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    --uiScale: ${theme.layout.navbar.uiScale.tablet};
    padding: ${theme.layout.navbar.padding.tablet};
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    --uiScale: ${theme.layout.navbar.uiScale.phone};
    padding: ${theme.layout.navbar.padding.phone};
  }

  @media (min-width: ${theme.breakpoints.desktopHd}px) {
    --uiScale: ${theme.layout.navbar.uiScale.desktopHd};
    padding: ${theme.layout.navbar.padding.desktopHd};
  }

  @media (min-width: ${theme.breakpoints.tv4k}px) {
    --uiScale: ${theme.layout.navbar.uiScale.tv4k};
    padding: ${theme.layout.navbar.padding.tv4k};
  }
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
  height: ${theme.layout.navbar.logoHeight.base};
  width: auto;
  cursor: pointer;
  filter: ${theme.effects.logoFilter};
  transition:
    transform 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-1px) scale(1.02);
    filter: ${theme.effects.logoFilterHover};
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    height: ${theme.layout.navbar.logoHeight.tablet};
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    height: ${theme.layout.navbar.logoHeight.phone};
  }

  @media (min-width: ${theme.breakpoints.desktopHd}px) {
    height: ${theme.layout.navbar.logoHeight.desktopHd};
  }

  @media (min-width: ${theme.breakpoints.tv4k}px) {
    height: ${theme.layout.navbar.logoHeight.tv4k};
  }
`;

export const NavLinks = styled.ul`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  column-gap: ${theme.layout.navbar.menuGap.base};
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 25;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    column-gap: ${theme.layout.navbar.menuGap.tablet};
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    column-gap: ${theme.layout.navbar.menuGap.phone};
  }

  @media (min-width: ${theme.breakpoints.desktopHd}px) {
    column-gap: ${theme.layout.navbar.menuGap.desktopHd};
  }

  @media (min-width: ${theme.breakpoints.tv4k}px) {
    column-gap: ${theme.layout.navbar.menuGap.tv4k};
  }
`;

export const NavLink = styled.li`
  font-family: ${theme.fonts.main};
  font-size: ${theme.layout.navbar.menuFontScale.base};
  font-weight: 600;
  letter-spacing: calc(0.08em * var(--uiScale));
  text-transform: uppercase;
  color: ${theme.colors.goldSoft};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;
  padding: 2px 4px;
  text-shadow: ${theme.effects.navTextShadow};
  transition:
    color 0.2s,
    text-shadow 0.2s;

  &:hover {
    color: ${theme.colors.goldHover};
    text-shadow: ${theme.effects.navTextShadowHover};
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: ${theme.layout.navbar.menuFontScale.tablet};
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    font-size: ${theme.layout.navbar.menuFontScale.phone};
    text-shadow: ${theme.effects.navTextShadowMobile};
  }
`;
