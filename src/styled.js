import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import logoImage from "./image/znak-wodny.png";

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

export const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 80% 10%, #7a1428 0%, transparent 50%),
    radial-gradient(ellipse at 20% 80%, #4a0d1a 0%, transparent 55%),
    radial-gradient(ellipse at 50% 50%, #2e0810 0%, #1a0005 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 70% 0%, rgba(212, 175, 55, 0.18) 0%, transparent 45%),
      radial-gradient(ellipse at 100% 50%, rgba(180, 140, 30, 0.10) 0%, transparent 40%),
      radial-gradient(ellipse at 30% 100%, rgba(212, 175, 55, 0.08) 0%, transparent 45%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 80px,
        rgba(212, 175, 55, 0.025) 80px,
        rgba(212, 175, 55, 0.025) 81px
      );
    pointer-events: none;
  }
`;

export const Logo = styled.img.attrs({ src: logoImage, alt: "Logo" })`
  position: absolute;
  top: 12px;
  left: 32px;
  height: 110px;
  width: auto;
  z-index: 10;
  filter: brightness(4) drop-shadow(0 0 16px rgba(212, 175, 55, 1));
`;
