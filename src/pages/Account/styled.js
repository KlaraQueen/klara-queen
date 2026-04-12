import styled from "styled-components";
import { theme } from "../../theme";

const c = theme.colors;
const bp = theme.breakpoints;
const r = theme.navbar.linkBarRadius;

export const Page = styled.main`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: clamp(20px, 4vw, 40px) clamp(16px, 3vw, 32px);
  padding-bottom: clamp(48px, 8vw, 80px);
  box-sizing: border-box;

  @media (max-width: ${bp.tablet}px) {
    min-height: calc(100vh - 64px);
    padding-top: clamp(28px, 6vw, 48px);
  }
`;

export const Layout = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: clamp(20px, 3vw, 32px);
  align-items: start;

  @media (max-width: ${bp.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const Shell = styled.div`
  border-radius: ${theme.navbar.drawerBorderRadius};
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.45) 0%,
    rgba(46, 14, 22, 0.72) 50%,
    rgba(30, 8, 16, 0.9) 100%
  );
  border: 1px solid ${c.navBorderGold18};
  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 247, 220, 0.08);
  backdrop-filter: blur(14px) saturate(115%);
  overflow: hidden;
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  padding: clamp(16px, 2.5vw, 22px);
  border-right: 1px solid ${c.navBorderGold18};
  background: rgba(0, 0, 0, 0.18);

  @media (max-width: ${bp.tablet}px) {
    border-right: none;
    border-bottom: 1px solid ${c.navBorderGold18};
    padding-bottom: 12px;
  }
`;

export const Brand = styled.div`
  padding: 8px 10px 18px;
  border-bottom: 1px solid ${c.navBorderGold18};
  margin-bottom: 12px;

  @media (max-width: ${bp.tablet}px) {
    padding-bottom: 14px;
    margin-bottom: 10px;
  }
`;

export const BrandTitle = styled.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.35rem, 3vw, 1.65rem);
  font-weight: 700;
  color: ${c.white};
  margin: 0 0 4px 0;
  letter-spacing: 0.3px;
`;

export const BrandEmail = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.55);
  word-break: break-all;
`;

export const TabList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: ${bp.tablet}px) {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 6px;
    padding-bottom: 6px;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 4px;
    }
  }
`;

export const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 11px 12px;
  border: 1px solid transparent;
  border-radius: ${r};
  background: ${(p) =>
    p.$active ? "rgba(212, 175, 55, 0.14)" : "transparent"};
  color: ${(p) => (p.$active ? c.goldHover : "rgba(255, 255, 255, 0.78)")};
  font-size: 0.88rem;
  font-weight: ${(p) => (p.$active ? 600 : 500)};
  font-family: inherit;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  @media (max-width: ${bp.tablet}px) {
    width: auto;
    flex-shrink: 0;
    white-space: nowrap;
  }

  svg {
    font-size: 0.95rem;
    opacity: ${(p) => (p.$active ? 1 : 0.85)};
  }

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    color: ${c.goldHover};
    border-color: rgba(241, 213, 146, 0.15);
  }
`;

export const Main = styled.div`
  padding: clamp(22px, 4vw, 36px);
  min-height: 420px;
`;

export const PanelTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.45rem, 3.5vw, 1.85rem);
  font-weight: 700;
  color: ${c.white};
  margin: 0 0 8px 0;
  letter-spacing: 0.3px;
`;

export const PanelDesc = styled.p`
  margin: 0 0 clamp(22px, 3vw, 28px) 0;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.55;
  max-width: 560px;
`;

export const FormGrid = styled.div`
  display: grid;
  gap: clamp(16px, 2.5vw, 20px);
  max-width: 520px;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: ${bp.phone}px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Label = styled.label`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.55px;
  text-transform: uppercase;
  color: ${c.goldHover};
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  font-size: 0.95rem;
  font-family: inherit;
  color: ${c.white};
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid ${c.navBorderGold26};
  border-radius: ${r};
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: ${c.goldMain};
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
  }
`;

export const PrimaryBtn = styled.button`
  margin-top: 8px;
  padding: 12px 22px;
  width: fit-content;
  border: 1px solid ${c.navBorderGold48};
  border-radius: ${r};
  font-size: 0.88rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${c.deepBlack};
  background: linear-gradient(180deg, ${c.goldHover} 0%, ${c.goldMain} 100%);
  transition:
    filter 0.2s ease,
    transform 0.2s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const GhostBtn = styled.button`
  margin-top: 8px;
  padding: 12px 18px;
  width: fit-content;
  border: 1px solid ${c.navBorderGold26};
  border-radius: ${r};
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  color: ${c.goldHover};
  background: rgba(255, 255, 255, 0.04);
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${c.navBorderGold48};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const Alert = styled.div`
  margin-bottom: 18px;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.45;
  border-radius: ${r};
  ${(p) =>
    p.$variant === "error"
      ? `
    color: #ffc9c9;
    background: rgba(158, 30, 54, 0.3);
    border: 1px solid rgba(241, 120, 140, 0.5);
  `
      : `
    color: rgba(220, 255, 220, 0.95);
    background: rgba(46, 125, 50, 0.22);
    border: 1px solid rgba(102, 187, 106, 0.45);
  `}
`;

export const Hint = styled.p`
  margin: 0 0 16px 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: clamp(36px, 6vw, 56px) 20px;
  border: 1px dashed ${c.navBorderGold26};
  border-radius: ${r};
  background: rgba(0, 0, 0, 0.15);
`;

export const EmptyIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 14px;
  opacity: 0.65;
`;

export const EmptyTitle = styled.p`
  margin: 0 0 8px 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${c.white};
`;

export const EmptyText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`;

export const TableWrap = styled.div`
  overflow-x: auto;
  border-radius: ${r};
  border: 1px solid ${c.navBorderGold18};
  background: rgba(0, 0, 0, 0.2);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;

  th,
  td {
    padding: 12px 14px;
    text-align: left;
    border-bottom: 1px solid ${c.navBorderGold18};
  }

  th {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: ${c.goldHover};
    font-weight: 600;
    background: rgba(0, 0, 0, 0.25);
  }

  tr:last-child td {
    border-bottom: none;
  }

  td {
    color: rgba(255, 255, 255, 0.85);
  }
`;

export const PasswordWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PasswordInput = styled(Input)`
  padding-right: 44px;
`;

export const TogglePw = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${c.goldHover};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
