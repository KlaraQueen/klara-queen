import styled from "styled-components";
import { theme } from "../../../theme";

export const CopyrightBar = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 0;
  border-top: 1px solid ${theme.colors.navBorderGold18};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin: 30px auto 0;
    padding: 15px 0;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    margin: 20px auto 0;
    padding: 12px 0;
    gap: 10px;
  }
`;

export const CopyrightText = styled.span`
  color: ${theme.colors.footerText};
  opacity: 1;
  font-size: 0.77rem;
  letter-spacing: 0.6px;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
  text-shadow:
    0 1px 3px ${theme.colors.shadowLight},
    0 0 10px ${theme.colors.goldSoft20};

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 0.68rem;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    font-size: 0.63rem;
  }
`;

export const VisitCounter = styled.span`
  color: ${theme.colors.goldMain};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  font-family: "Cormorant Garamond", serif;
  text-shadow:
    0 1px 3px ${theme.colors.shadowLight},
    0 0 8px ${theme.colors.goldSoft25};

  strong {
    font-weight: 700;
    color: ${theme.colors.goldHover};
    text-shadow:
      0 2px 4px ${theme.colors.shadowMedium},
      0 0 12px ${theme.colors.goldSoft40};
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    font-size: 0.7rem;
  }
`;

export const ContactEmail = styled.a`
  color: ${theme.colors.footerText};
  font-size: 0.85rem;
  letter-spacing: 1.2px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 1;
  font-family: "Cormorant Garamond", serif;
  text-shadow:
    0 2px 4px ${theme.colors.shadowLight},
    0 0 14px ${theme.colors.goldSoft30};

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      ${theme.colors.goldHover} 0%,
      ${theme.colors.goldMain} 100%
    );
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${theme.colors.white};
    opacity: 1;
    text-shadow:
      0 2px 4px ${theme.colors.shadowLight},
      0 0 20px ${theme.colors.goldSoft40};

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    font-size: 0.7rem;
  }
`;
