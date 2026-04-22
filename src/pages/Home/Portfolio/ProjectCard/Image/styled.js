import styled from "styled-components";
import { theme } from "../../../../../theme";

export const DeviceWrapper = styled.div`
  width: 100%;
  height: clamp(110px, 18vw, 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  overflow: hidden;
  background: ${theme.colors.overlayBg};
  border-radius: 0;
  border: none;
  box-shadow: none;
  flex-shrink: 0;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.95) saturate(1);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;
`;
