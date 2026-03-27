import styled, { createGlobalStyle } from "styled-components";
import { theme } from "../../theme";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export const BackgroundWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      ellipse at 80% 10%,
      ${theme.colors.bordoAccent} 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      ${theme.colors.bordoAccentDark} 0%,
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
        ellipse at 70% 0%,
        ${theme.colors.goldSoft18} 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 100% 50%,
        ${theme.colors.goldSoft10} 0%,
        transparent 40%
      ),
      radial-gradient(
        ellipse at 30% 100%,
        ${theme.colors.goldSoft08} 0%,
        transparent 45%
      );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 80px,
      ${theme.colors.goldSoft025} 80px,
      ${theme.colors.goldSoft025} 81px
    );
    pointer-events: none;
  }
`;
