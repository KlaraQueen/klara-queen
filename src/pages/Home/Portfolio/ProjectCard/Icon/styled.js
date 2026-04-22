import styled from "styled-components";
import { theme } from "../../../../../theme";

export const IconCircle = styled.div`
  width: clamp(32px, 5.5vw, 42px);
  height: clamp(32px, 5.5vw, 42px);
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    ${theme.colors.goldHover} 0%,
    ${theme.colors.goldMain} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.deepBlack};
  font-size: clamp(0.75rem, 1.2vw, 1.1rem);
  margin-top: clamp(-16px, -2.5vw, -21px);
  z-index: 2;
  flex-shrink: 0;
  box-shadow:
    0 8px 16px ${theme.colors.shadowMedium},
    0 0 12px ${theme.colors.goldSoft25},
    inset 0 1px 0 ${theme.colors.goldSoft20};
`;
