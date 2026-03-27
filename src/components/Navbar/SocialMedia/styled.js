import styled from "styled-components";
import { theme } from "../../../theme";

export const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    gap: 14px;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    gap: 12px;
  }
`;

export const SocialIcon = styled.a`
  color: ${theme.colors.goldHover};
  font-size: 1.3rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease,
    filter 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.22))
    drop-shadow(0 0 8px rgba(212, 175, 55, 0.22));

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 1.18rem;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    font-size: 1.08rem;
  }

  &:hover {
    color: ${theme.colors.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${theme.colors.goldMain})
      drop-shadow(0 0 16px ${theme.colors.goldHover});
  }
`;
