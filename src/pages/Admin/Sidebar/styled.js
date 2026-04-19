import styled from "styled-components";
import { theme } from "../../../theme";

const c = theme.colors;

export const Nav = styled.nav`
  display: flex;
  gap: 6px;
  margin-bottom: 28px;
  border-bottom: 1px solid ${c.navBorderGold18};
  padding-bottom: 0;
`;

export const Tab = styled.button`
  padding: 10px 22px;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  border-bottom: 2px solid ${(p) => (p.$active ? c.goldMain : "transparent")};
  background: ${(p) => (p.$active ? c.goldSoft08 : "transparent")};
  color: ${(p) =>
    p.$active ? c.goldMain : c.textSubtle || "rgba(255,255,255,0.5)"};
  cursor: pointer;
  transition: all 0.25s ease;
  border-radius: 8px 8px 0 0;

  &:hover {
    background: ${c.goldSoft08};
    color: ${c.goldHover};
  }
`;
