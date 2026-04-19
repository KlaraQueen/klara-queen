import styled, { keyframes } from "styled-components";
import { theme } from "../../../../theme";

const c = theme.colors;
const bp = theme.breakpoints;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const FormPanel = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    165deg,
    ${c.panelFormStart} 0%,
    ${c.panelFormMid} 50%,
    ${c.panelFormEnd} 100%
  );
  border: 1px solid ${c.navBorderGold18};
  box-shadow: 0 16px 40px ${c.shadowLight};
  backdrop-filter: blur(12px);
  padding: clamp(20px, 3vw, 32px);
  margin-bottom: 24px;
  animation: ${fadeIn} 0.35s ease-out;
`;

export const FormTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: ${c.white};
  margin: 0 0 24px 0;
  padding-bottom: 14px;
  border-bottom: 1px solid ${c.navBorderGold18};
`;

export const ImageRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 18px;

  @media (max-width: ${bp.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageCol = styled.div``;

export const ImageLabel = styled.label`
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${c.goldMain};
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-bottom: 6px;
`;
