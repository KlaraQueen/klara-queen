import styled from "styled-components";
import { theme } from "../../theme";

export const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse at 82% 8%,
      ${theme.colors.bordoAccent} 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 14% 78%,
      ${theme.colors.bordoAccentDark} 0%,
      transparent 62%
    ),
    radial-gradient(
      ellipse at 50% -10%,
      ${theme.colors.goldSoft20} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 50% 50%,
      ${theme.colors.bordoCore} 0%,
      ${theme.colors.deepBlack} 100%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 74% 0%,
        ${theme.colors.goldSoft30} 0%,
        transparent 52%
      ),
      radial-gradient(
        ellipse at 100% 45%,
        ${theme.colors.goldSoft20} 0%,
        transparent 48%
      ),
      radial-gradient(
        ellipse at 28% 100%,
        ${theme.colors.goldSoft15} 0%,
        transparent 52%
      );
    opacity: 0.95;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        120deg,
        transparent 0%,
        ${theme.colors.goldSoft05} 36%,
        transparent 62%
      ),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 80px,
        ${theme.colors.goldSoft025} 80px,
        ${theme.colors.goldSoft025} 81px
      );
    opacity: 0.8;
    pointer-events: none;
  }
`;
