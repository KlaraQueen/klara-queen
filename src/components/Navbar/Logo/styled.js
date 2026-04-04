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
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${theme.colors.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${theme.colors.goldMain})
      drop-shadow(0 0 16px ${theme.colors.goldHover});
  }
`;
