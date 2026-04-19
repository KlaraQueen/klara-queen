import styled, { css, keyframes } from "styled-components";
import { theme } from "../../../theme";

const c = theme.colors;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.div`
  position: fixed;
  bottom: 28px;
  right: 28px;
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 500;
  z-index: 999;
  animation: ${fadeIn} 0.3s ease-out;
  box-shadow: 0 8px 32px ${c.shadowMedium};

  ${(p) =>
    p.$error
      ? css`
          background: ${c.bordoSoft90};
          border: 1px solid ${c.pinkSoft40};
          color: ${c.toastErrorText};
        `
      : css`
          background: ${c.toastSuccessBg};
          border: 1px solid ${c.toastSuccessBorder};
          color: ${c.toastSuccessText};
        `}
`;
