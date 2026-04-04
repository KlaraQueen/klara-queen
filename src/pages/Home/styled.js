import styled from "styled-components";
import { theme } from "../../theme";

export const PageWrapper = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: visible;
  background: transparent;
  padding: 1px 0 0;
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: 821px) {
    padding: 1px 0 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding: 1px 0 0;
  }

  @media (max-width: 640px) {
    padding: 1px 0 0;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 1px 0 0;
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
  padding: clamp(16px, 2.5vw, 32px) clamp(22px, 4vw, 56px) 0;
  gap: var(--columns-gap);
  margin: 0;

  @media (max-width: 1050px) {
    --columns-gap: clamp(10px, 1.4vw, 18px);
    padding: clamp(14px, 2vw, 28px) clamp(18px, 3.2vw, 40px) 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 0px;
    padding: clamp(20px, 3vw, 32px) 14px 0;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    gap: 0px;
    padding: clamp(16px, 2.5vw, 24px) 10px 0;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    padding: clamp(16px, 2.5vw, 24px) 10px 0;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 8px;
    padding: clamp(14px, 2vw, 18px) 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: clamp(12px, 1.5vw, 16px) 8px 0;
  }
`;

export const LeftColumn = styled.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;
  margin: 0;

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

  @media (max-width: 640px) {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    margin-top: 0;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`;

export const RightColumn = styled.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;
  margin: 0;

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
