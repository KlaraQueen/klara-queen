import styled from "styled-components";
import { theme } from "../../../theme";
import logoImg from "../../../image/znak-wodny.png";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img.attrs({ src: logoImg, alt: "Logo" })`
  height: 90px;
  width: auto;
  cursor: pointer;
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${theme.colors.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
