import styled from "styled-components";
import { theme } from "../../../theme";

const t = theme.navbar;
const c = theme.colors;
const bp = theme.breakpoints;

export const SocialWrapper = styled.div`
  display: flex;
  gap: ${t.socialGap};
  align-items: center;

  @media (max-width: ${bp.tablet}px) {
    gap: ${t.socialGapTablet};
  }

  @media (max-width: ${bp.phone}px) {
    gap: ${t.socialGapPhone};
  }
`;

export const SocialIcon = styled.a`
  color: ${c.goldHover};
  font-size: ${t.socialIconSize};
  transition:
    color 0.3s ease,
    transform 0.3s ease,
    filter 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.22))
    drop-shadow(0 0 8px rgba(212, 175, 55, 0.22));

  @media (max-width: ${bp.tablet}px) {
    font-size: ${t.socialIconSizeTablet};
  }

  @media (max-width: ${bp.phone}px) {
    font-size: ${t.socialIconSizePhone};
  }

  &:hover {
    color: ${c.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${c.goldMain})
      drop-shadow(0 0 16px ${c.goldHover});
  }
`;
