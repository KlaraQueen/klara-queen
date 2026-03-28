import styled from "styled-components";
import { theme } from "../../theme";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  z-index: 1000;

  @media (max-width: ${theme.breakpoints.desktopHd}px) {
    padding: 0 42px;
  }

  @media (max-width: 821px) {
    height: auto;
    min-height: 64px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "left center right";
    align-items: center;
    column-gap: 10px;
    row-gap: 0;
    padding: 6px 14px;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding: 6px 12px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    min-height: 60px;
    column-gap: 8px;
    padding: 6px 10px;
  }
`;

export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 821px) {
    grid-area: left;
    flex: none;
    min-width: 0;
  }
`;

export const NavCenter = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  @media (max-width: 821px) {
    grid-area: center;
    flex: 1;
    min-width: 0;
    justify-content: center;
  }

  @media (max-width: 629px) {
    display: none;
  }
`;

export const NavRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  @media (max-width: 821px) {
    grid-area: right;
    flex: none;
    min-width: 0;
  }
`;

export const DesktopSocial = styled.div`
  display: flex;

  @media (max-width: 629px) {
    display: none;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  border: 1px solid rgba(241, 213, 146, 0.38);
  background: rgba(34, 10, 16, 0.72);
  color: ${theme.colors.goldHover};
  width: 44px;
  height: 44px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.24rem;
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

  @media (max-width: 629px) {
    display: inline-flex;
  }
`;

export const DrawerBackdrop = styled.button`
  position: fixed;
  inset: 0;
  border: none;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${(props) => (props.$open ? 1 : 0)};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  transition: opacity 0.25s ease;
  z-index: 999;
  display: none;

  @media (max-width: 629px) {
    top: 72px;
    display: block;
  }
`;

export const MobileDrawer = styled.aside`
  position: fixed;
  top: 78px;
  left: 50%;
  right: auto;
  width: min(92vw, 360px);
  max-width: 360px;
  max-height: calc(100vh - 72px);
  height: auto;
  padding: 14px 18px 16px;
  background: linear-gradient(
    180deg,
    rgba(120, 40, 64, 0.72) 0%,
    rgba(82, 24, 42, 0.68) 100%
  );
  backdrop-filter: blur(12px) saturate(120%);
  border: 1px solid rgba(241, 213, 146, 0.18);
  border-radius: 16px;
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 247, 220, 0.12);
  transform: ${(props) =>
    props.$open ? "translate(-50%, 0)" : "translate(-50%, -14px)"};
  opacity: ${(props) => (props.$open ? 1 : 0)};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  transition:
    transform 0.24s ease,
    opacity 0.24s ease;
  z-index: 1001;
  display: none;
  overflow-y: auto;

  @media (max-width: 629px) {
    display: block;
  }
`;

export const MobileSocial = styled.div`
  margin-top: 14px;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  padding-left: 0;
  border-top: 1px solid rgba(241, 213, 146, 0.18);

  & > div {
    justify-content: center;
  }
`;
