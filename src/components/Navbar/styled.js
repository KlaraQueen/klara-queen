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
  border: 1px solid rgba(241, 213, 146, 0.28);
  background: rgba(28, 8, 14, 0.55);
  color: ${theme.colors.goldHover};
  width: 38px;
  height: 38px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;

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
    display: block;
  }
`;

export const MobileDrawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: max-content;
  min-width: 146px;
  max-width: min(58vw, 178px);
  height: 100vh;
  padding: 76px 6px 10px;
  background: linear-gradient(
    180deg,
    rgba(45, 12, 20, 0.96) 0%,
    rgba(22, 5, 10, 0.97) 100%
  );
  border-left: 1px solid rgba(241, 213, 146, 0.2);
  transform: translateX(${(props) => (props.$open ? "0" : "100%")});
  transition: transform 0.28s ease;
  z-index: 1001;
  display: none;
  overflow-y: auto;

  @media (max-width: 629px) {
    display: block;
  }
`;

export const MobileSocial = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-start;

  & > div {
    justify-content: flex-start;
  }
`;
