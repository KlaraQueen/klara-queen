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

  @media (max-width: ${theme.breakpoints.tablet}px) {
    height: auto;
    min-height: 82px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      "left spacer right"
      "center center center";
    align-items: center;
    row-gap: 10px;
    padding: 10px 22px 12px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    min-height: 74px;
    row-gap: 8px;
    padding: 8px 14px 10px;
  }
`;

export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    grid-area: left;
    flex: none;
    min-width: 0;
  }
`;

export const NavCenter = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    grid-area: center;
    flex: none;
    width: 100%;
    justify-content: center;
    overflow-x: auto;
    scrollbar-width: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    grid-area: right;
    flex: none;
    min-width: 0;
  }
`;
