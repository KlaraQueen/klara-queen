import styled from "styled-components";
import { theme } from "../../../theme";

const t = theme.navbar;
const c = theme.colors;

export const NavLinksBar = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${t.linksBarGap};
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  padding: 0 ${t.linksBarPaddingX};
  white-space: nowrap;
  width: auto;
  min-width: 0;
  max-width: 100%;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    gap: ${t.linksBarGapTablet};
    padding: 0;
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: ${t.linksBarGapPhone};
  }
`;

export const NavLinksDrawer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${t.linksDrawerGapTablet};
  flex-wrap: nowrap;
  list-style: none;
  margin: 0 0 ${t.linksDrawerMarginBottom} 0;
  padding: 0;
  white-space: nowrap;
  width: auto;
  min-width: 0;

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: ${t.linksDrawerGapPhone};
  }
`;

export const NavLinkBar = styled.li`
  flex-shrink: 1;
  min-width: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: auto;
  color: ${c.goldHover};
  font-family: ${theme.fonts.main};
  font-weight: ${t.linkBarFontWeight};
  text-transform: uppercase;
  letter-spacing: ${t.linkBarLetterSpacing};
  cursor: pointer;
  font-size: ${t.linkBarFontSize};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${t.linkBarPadding};
  border-radius: ${t.linkBarRadius};
  border: 1px solid ${c.navBorderGold26};
  background: linear-gradient(
    180deg,
    ${c.navLinkBarBgTop} 0%,
    ${c.navLinkBarBgBottom} 100%
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

  &::before {
    content: "";
    display: none;
  }

  &:not(:last-child)::after {
    content: "";
    display: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    letter-spacing: ${t.linkBarLetterSpacingTablet};
    font-size: ${t.linkBarFontSizeTablet};
    padding: ${t.linkBarPaddingTablet};
    white-space: nowrap;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    letter-spacing: ${t.linkBarLetterSpacingPhone};
    font-size: ${t.linkBarFontSizePhone};
    padding: ${t.linkBarPaddingPhone};
  }

  &:hover {
    color: ${c.white};
    transform: translateY(-1px);
    border-color: ${c.navBorderGold48};
    background: linear-gradient(
      180deg,
      ${c.navLinkBarBgHoverTop} 0%,
      ${c.navLinkBarBgHoverBottom} 100%
    );
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${c.goldMain},
      0 0 18px ${c.goldHover};
  }
`;

export const NavLinkDrawer = styled.li`
  flex-shrink: 0;
  min-width: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: auto;
  color: ${c.goldHover};
  font-family: ${theme.fonts.main};
  font-weight: ${t.linkDrawerFontWeight};
  text-transform: uppercase;
  letter-spacing: ${t.linkDrawerLetterSpacing};
  cursor: pointer;
  font-size: ${t.linkDrawerFontSize};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${t.linkDrawerPadding};
  border-radius: ${t.linkBarRadius};
  border: none;
  background: transparent;
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
    display: block;
    position: absolute;
    left: 50%;
    bottom: ${t.linkSeparatorOffsetY};
    width: ${t.linkSeparatorWidth};
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${c.navDividerGold50} 50%,
      transparent 100%
    );
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding: ${t.linkDrawerPaddingTablet};
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    letter-spacing: ${t.linkDrawerLetterSpacingPhone};
    font-size: ${t.linkDrawerFontSizePhone};
    padding: ${t.linkDrawerPaddingPhone};
  }

  &:hover {
    color: ${c.white};
    transform: translateY(-1px);
    border-color: transparent;
    background: transparent;
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${c.goldMain},
      0 0 18px ${c.goldHover};
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
