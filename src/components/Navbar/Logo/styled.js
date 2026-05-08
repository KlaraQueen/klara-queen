import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../theme";
import { logoData } from "../../../data/logoData";

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const LogoImage = styled.img.attrs({
  src: logoData.src,
  alt: logoData.alt,
})`
  height: clamp(50px, 8vw, 85px);
  width: auto;
  cursor: pointer;
  filter: brightness(1.05)
    contrast(1.05)
    saturate(1.03)
    drop-shadow(0 0 6px ${theme.colors.goldSoft12})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.28));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.03);
    filter: brightness(1.08)
      contrast(1.06)
      saturate(1.05)
      drop-shadow(0 0 10px ${theme.colors.goldSoft18})
      drop-shadow(0 2px 8px rgba(0, 0, 0, 0.32));
  }
`;
