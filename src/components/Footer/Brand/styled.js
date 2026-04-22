import styled from "styled-components";
import { theme } from "../../../theme";

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: -56px;

  @media (max-width: ${theme.breakpoints.desktopHd}px) {
    margin-top: -50px;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    margin-top: -36px;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    margin-top: -28px;
  }
`;

export const LogoImage = styled.img`
  height: 180px;
  width: auto;
  cursor: pointer;
  filter: brightness(2.8) contrast(1.1) saturate(1)
    drop-shadow(0 0 1px ${theme.colors.goldSoft15})
    drop-shadow(0 0 6px ${theme.colors.goldMain})
    drop-shadow(0 1px 4px ${theme.colors.shadowLight});
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(2.8) contrast(1.1) saturate(1)
      drop-shadow(0 0 2px ${theme.colors.goldSoft20})
      drop-shadow(0 0 8px ${theme.colors.goldMain})
      drop-shadow(0 0 12px ${theme.colors.goldHover});
  }

  @media (max-width: ${theme.breakpoints.desktopHd}px) {
    height: 168px;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    height: 140px;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    height: 120px;
  }
`;

export const BrandDescription = styled.p`
  color: ${theme.colors.footerText};
  opacity: 1;
  font-size: 0.92rem;
  line-height: 1.7;
  max-width: 400px;
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.6px;
  font-family: "Cormorant Garamond", serif;
  text-shadow:
    0 1px 3px ${theme.colors.shadowLight},
    0 0 10px ${theme.colors.goldSoft20};

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 0.78rem;
    line-height: 1.5;
    max-width: 500px;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;
