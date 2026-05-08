import styled from "styled-components";
import { theme } from "../../../theme";

const c = theme.colors;

export const Section = styled.section``;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

export const FilterBtn = styled.button`
  padding: 5px 14px;
  border-radius: 16px;
  font-size: 0.78rem;
  font-weight: 500;
  border: 1px solid ${(p) => (p.$active ? c.goldMain : c.goldSoft18)};
  background: ${(p) => (p.$active ? c.goldSoft08 : "transparent")};
  color: ${(p) =>
    p.$active ? c.goldMain : c.textSubtle || "rgba(255,255,255,0.5)"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${c.goldSoft08};
    color: ${c.goldHover};
  }
`;

export const Spinner = styled.p`
  text-align: center;
  color: ${c.textSubtle || "rgba(255,255,255,0.5)"};
  font-size: 0.92rem;
  padding: 40px 0;
`;

export const MaintenanceRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid ${c.goldSoft18};
  background: ${c.goldSoft04};
  font-size: 0.8rem;
  color: ${c.textSubtle || "rgba(255,255,255,0.55)"};
`;

export const MigrateBtn = styled.button`
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 0.76rem;
  font-weight: 500;
  border: 1px solid ${c.goldSoft18};
  background: transparent;
  color: ${c.goldMain};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${c.goldSoft08};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TableWrap = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    165deg,
    ${c.panelTableStart} 0%,
    ${c.panelTableMid} 50%,
    ${c.panelTableEnd} 100%
  );
  border: 1px solid ${c.navBorderGold18};
  box-shadow: 0 16px 40px ${c.shadowLight};
  padding: clamp(16px, 2vw, 24px);
  overflow-x: auto;
`;
