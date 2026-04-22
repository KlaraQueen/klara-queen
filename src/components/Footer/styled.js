import styled from "styled-components";
import { theme } from "../../theme";

export const FooterContainer = styled.footer`
  width: 100%;
  background: linear-gradient(
    135deg,
    ${theme.colors.footerStart} 0%,
    ${theme.colors.footerEnd} 100%
  );
  border-top: 1px solid ${theme.colors.navBorderGold38};
  padding: 60px 50px 25px;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(10px);

  @media (max-width: ${theme.breakpoints.desktopHd}px) {
    padding: 55px 45px 22px;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding: 45px 18px 18px;
  }

  @media (max-width: 821px) {
    padding: 30px 12px 12px;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    padding: 25px 10px 10px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }

  @media (max-width: 821px) {
    gap: 12px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 12px;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    gap: 10px;
  }
`;
