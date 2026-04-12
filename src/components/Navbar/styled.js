import styled from "styled-components";
import { theme } from "../../theme";

const t = theme.navbar;
const c = theme.colors;
const bp = theme.breakpoints;

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${t.heightDesktop};
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  column-gap: ${t.gridColumnGapDesktop};
  padding: 0 ${t.paddingXDesktop};
  background: ${c.navShellBg};
  backdrop-filter: blur(15px);
  border-bottom: 1px solid ${c.navBarUnderline};
  z-index: 1000;

  @media (max-width: ${bp.tablet}px) {
    height: auto;
    min-height: ${t.minHeightTablet};
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "left center right";
    align-items: center;
    column-gap: ${t.gridColumnGapTablet};
    row-gap: 0;
    padding: 0 ${t.paddingXTablet};
  }

  @media (max-width: ${bp.phone}px) {
    min-height: ${t.minHeightPhone};
    column-gap: ${t.gridColumnGapPhone};
    padding: 0 ${t.paddingXPhone};
  }
`;

export const NavLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 0;
  flex-shrink: 0;

  @media (max-width: ${bp.tablet}px) {
    grid-area: left;
  }
`;

export const NavCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  width: 100%;

  @media (max-width: ${bp.tablet}px) {
    display: none;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.navRightGapDesktop};
  min-width: 0;
  flex-shrink: 0;

  @media (max-width: ${bp.tablet}px) {
    grid-area: right;
    gap: ${t.navRightGapTablet};
  }
`;

export const DesktopLogin = styled.div`
  display: flex;
  flex-shrink: 0;

  @media (max-width: ${bp.tablet}px) {
    display: none;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  border: 1px solid ${c.navBorderGold38};
  background: ${c.navToggleBg};
  color: ${c.goldHover};
  width: ${t.menuToggleSize};
  height: ${t.menuToggleSize};
  border-radius: ${t.menuToggleRadius};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${t.menuToggleFontSize};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: rgba(255, 239, 194, 0.75);
    box-shadow:
      0 6px 16px rgba(0, 0, 0, 0.34),
      0 0 10px rgba(241, 213, 146, 0.22);
  }

  @media (max-width: ${bp.tablet}px) {
    display: inline-flex;
  }
`;

export const DrawerBackdrop = styled.button`
  position: fixed;
  inset: 0;
  border: none;
  background: ${c.navBackdrop};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 999;
  display: none;

  &[data-open] {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: ${bp.tablet}px) {
    top: ${t.drawerBackdropTopTablet};
    display: block;
  }
`;

export const MobileDrawer = styled.aside`
  position: fixed;
  top: ${t.drawerTop};
  left: 50%;
  right: auto;
  width: ${t.drawerWidth};
  max-width: ${t.drawerMaxWidth};
  max-height: calc(100vh - ${t.drawerViewportOffset});
  height: auto;
  padding: ${t.drawerPadding};
  background: linear-gradient(
    180deg,
    rgba(120, 40, 64, 0.72) 0%,
    rgba(82, 24, 42, 0.68) 100%
  );
  backdrop-filter: blur(12px) saturate(120%);
  border: 1px solid ${c.navBorderGold18};
  border-radius: ${t.drawerBorderRadius};
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 247, 220, 0.12);
  transform: translate(-50%, -14px);
  opacity: 0;
  pointer-events: none;
  transition:
    transform 0.24s ease,
    opacity 0.24s ease;
  z-index: 1001;
  display: none;
  overflow-y: auto;

  &[data-open] {
    transform: translate(-50%, 0);
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: ${bp.tablet}px) {
    display: block;
  }
`;

export const MobileSocial = styled.div`
  margin-top: ${t.mobileSocialMarginTop};
  padding-top: ${t.mobileSocialPaddingTop};
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${c.navBorderGold18};

  & > div {
    justify-content: center;
  }
`;

export const MobileLoginContainer = styled.div`
  margin-top: ${t.mobileLoginMarginTop};
  padding: ${t.mobileLoginPaddingY} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${c.navBorderGold18};

  @media (max-width: ${bp.phone}px) {
    margin-top: ${t.mobileLoginMarginTopPhone};
    padding: ${t.mobileLoginPaddingYPhone} 0;
  }
`;
