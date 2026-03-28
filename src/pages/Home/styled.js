import styled from "styled-components";
import { theme } from "../../theme";

export const PageWrapper = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: transparent;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    align-items: flex-start;
    padding-top: 58px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding-top: 64px;
  }

  @media (max-width: 640px) {
    padding-top: 76px;
  }
`;

export const MainContent = styled.div`
  --columns-gap: clamp(14px, 2vw, 28px);
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  padding: clamp(12px, 2vh, 24px) clamp(22px, 4vw, 56px);
  gap: var(--columns-gap);
  transform: translateY(-104px);

  @media (max-width: ${theme.breakpoints.desktopHd}px) {
    transform: translateY(-94px);
  }

  @media (max-width: 1050px) {
    --columns-gap: clamp(10px, 1.4vw, 18px);
    padding: clamp(10px, 1.8vh, 18px) clamp(18px, 3.2vw, 40px);
    transform: translateY(-84px);
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 12px;
    transform: translateY(-18px);
    padding: 6px 14px 10px;
    margin: 0 auto;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    transform: translateY(0);
    gap: 12px;
    padding: 8px 10px 10px;
  }

  @media (max-width: 640px) {
    gap: 14px;
    padding: 10px 10px 12px;
  }
`;

export const LeftColumn = styled.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${theme.breakpoints.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: -20px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    margin-top: -18px;
  }

  @media (max-width: 640px) {
    margin-top: -16px;
  }
`;

export const RightColumn = styled.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${theme.breakpoints.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    margin-top: 0;
  }
`;

export const ContentOverlay = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
