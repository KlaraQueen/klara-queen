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
