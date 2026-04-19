import styled from "styled-components";
import { theme } from "../../../../../theme";

const c = theme.colors;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const Chip = styled.button`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${c.goldSoft25};
  transition: all 0.25s ease;
  background: ${(p) =>
    p.$active
      ? `linear-gradient(135deg, ${c.goldSoft30}, ${c.goldSoft12})`
      : c.inputBgLight};
  color: ${(p) => (p.$active ? c.goldHover : c.textSubtle)};
  border-color: ${(p) => (p.$active ? c.goldMain : c.goldSoft15)};

  &:hover {
    background: ${c.goldSoft18};
    color: ${c.goldMain};
  }
`;
