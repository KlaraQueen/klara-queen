import styled from "styled-components";
import { theme } from "../../../../theme";

const c = theme.colors;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const Head = styled.thead``;

export const HeadCell = styled.th`
  text-align: left;
  padding: 10px 14px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${c.goldMain};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid ${c.navBorderGold18};
  white-space: nowrap;
`;

export const Row = styled.tr`
  transition: background 0.2s ease;

  &:hover {
    background: ${c.goldSoft08};
  }
`;

export const Cell = styled.td`
  padding: 12px 14px;
  font-size: 0.88rem;
  color: ${c.white};
  border-bottom: 1px solid ${c.navBorderGold18};
  vertical-align: middle;
`;

export const Status = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${(p) =>
    p.$status === "wystawiona"
      ? c.toastSuccessBg || "rgba(34,197,94,0.15)"
      : "rgba(251,191,36,0.15)"};
  color: ${(p) =>
    p.$status === "wystawiona"
      ? c.toastSuccessText || "#22c55e"
      : "#fbbf24"};
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ViewBtn = styled.button`
  padding: 5px 14px;
  border-radius: 8px;
  border: 1px solid ${c.goldSoft18};
  background: transparent;
  color: ${c.goldMain};
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${c.goldSoft08};
    color: ${c.goldHover};
  }
`;

export const Empty = styled.p`
  text-align: center;
  color: ${c.textSubtle || "rgba(255,255,255,0.5)"};
  font-size: 0.92rem;
  padding: 40px 0;
`;
