import styled from "styled-components";
import { theme } from "../../../theme";

const c = theme.colors;

export const Section = styled.section``;

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
