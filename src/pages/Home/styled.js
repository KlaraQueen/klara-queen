import styled from "styled-components";
import { theme } from "../../theme";

export const PageWrapper = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  background: transparent;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentOverlay = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
