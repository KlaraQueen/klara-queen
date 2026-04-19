import styled from "styled-components";
import { theme } from "../../../../../theme";

const c = theme.colors;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid ${c.navBorderGold18};
`;

export const SaveBtn = styled.button`
  padding: 10px 28px;
  border-radius: 10px;
  border: 1px solid ${c.goldMain};
  background: linear-gradient(135deg, ${c.goldSoft25}, ${c.goldSoft08});
  color: ${c.goldMain};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, ${c.goldSoft40}, ${c.goldSoft15});
    color: ${c.goldHover};
    box-shadow: 0 4px 20px ${c.goldSoft20};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CancelBtn = styled.button`
  padding: 10px 22px;
  border-radius: 10px;
  border: 1px solid ${c.btnNeutralBorder};
  background: ${c.btnNeutralBg};
  color: ${c.textSubtle};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${c.btnNeutralBgHover};
    color: ${c.white};
  }
`;
