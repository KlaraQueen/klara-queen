import styled from "styled-components";
import { theme } from "../../../theme";
import logoImg from "../../../image/znak-wodny.png";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img.attrs({ src: logoImg, alt: "Logo" })`
  height: 50px;
  width: auto;
  cursor: pointer;
  filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.3));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
