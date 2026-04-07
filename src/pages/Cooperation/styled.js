import styled from "styled-components";
import { theme } from "../../theme";

export const CooperationContainer = styled.section`
  position: relative;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`;

export const CooperationContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`;
