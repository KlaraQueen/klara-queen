import styled, { css, keyframes } from "styled-components";
import { theme } from "../../../theme";

const c = theme.colors;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${c.overlayBg};
  backdrop-filter: blur(6px);
  animation: ${fadeIn} 0.2s ease-out;
`;

export const Box = styled.div`
  background: linear-gradient(
    165deg,
    ${c.panelDialogStart} 0%,
    ${c.panelDialogEnd} 100%
  );
  border: 1px solid ${c.navBorderGold18};
  border-radius: 16px;
  padding: 28px 32px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px ${c.shadowHeavy};
`;

export const Text = styled.p`
  color: ${c.white};
  font-size: 0.95rem;
  margin: 0 0 22px;
  line-height: 1.5;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const btn = css`
  padding: 10px 22px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
`;

export const CancelBtn = styled.button`
  ${btn}
  border: 1px solid ${c.btnNeutralBorder};
  background: ${c.btnNeutralBg};
  color: ${c.textSubtle};

  &:hover {
    background: ${c.btnNeutralBgHover};
    color: ${c.white};
  }
`;

export const ConfirmBtn = styled.button`
  ${btn}
  border: 1px solid ${c.bordoSoft50};
  background: ${c.bordoSoft20};
  color: ${c.bordoAccent};
  font-weight: 600;

  &:hover {
    background: ${c.bordoSoft35};
    color: ${c.pinkAccent};
  }
`;
