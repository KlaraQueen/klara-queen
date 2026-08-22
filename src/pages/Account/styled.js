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

  @media (max-width: ${bp.phone}px) {
    padding: 16px 10px 48px;
  }
`;

export const Layout = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Shell = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  border-radius: ${theme.navbar.drawerBorderRadius};
  background: linear-gradient(
    165deg,
    ${c.panelFormStart} 0%,
    ${c.panelFormMid} 50%,
    ${c.panelFormEnd} 100%
  );
  border: 1px solid ${c.navBorderGold18};
  box-shadow:
    0 20px 48px ${c.shadowMedium},
    inset 0 1px 0 ${c.goldSoft08};
  backdrop-filter: blur(14px) saturate(115%);
  overflow: hidden;

  @media (max-width: ${bp.tablet}px) {
    grid-template-columns: 1fr;
    overflow: visible;
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  padding: clamp(16px, 2.5vw, 22px);
  border-right: 1px solid ${c.navBorderGold18};
  background: ${c.overlayBg};
  min-width: 0;

  @media (max-width: ${bp.tablet}px) {
    border-right: none;
    border-bottom: 1px solid ${c.navBorderGold18};
    padding-bottom: 12px;
  }

  @media (max-width: ${bp.phone}px) {
    padding: 12px 10px;
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
  color: ${c.textSubtle};
  word-break: break-all;
`;

export const TabList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: ${bp.tablet}px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    padding-bottom: 6px;
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 11px 12px;
  margin-top: 8px;
  border: none;
  border-top: 1px solid ${c.navBorderGold18};
  padding-top: 16px;
  border-radius: 0;
  background: transparent;
  color: ${c.textSubtle};
  font-size: 0.86rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease;

  svg {
    font-size: 0.95rem;
    opacity: 0.75;
  }

  &:hover {
    color: ${c.goldHover};
    background: ${c.goldSoft08};
  }

  @media (max-width: ${bp.tablet}px) {
    display: none;
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
  background: ${(p) => (p.$active ? c.goldSoft15 : "transparent")};
  color: ${(p) => (p.$active ? c.goldHover : c.textMuted)};
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
    font-size: 0.84rem;
    padding: 9px 11px;
    gap: 8px;
  }

  svg {
    font-size: 0.95rem;
    opacity: ${(p) => (p.$active ? 1 : 0.85)};
  }

  &:hover {
    background: ${c.goldSoft10};
    color: ${c.goldHover};
    border-color: ${c.navBorderGold18};
  }
`;

export const Main = styled.div`
  padding: clamp(22px, 4vw, 36px);
  min-height: 420px;
  min-width: 0;

  @media (max-width: ${bp.phone}px) {
    padding: 16px 12px;
    min-height: 280px;
  }
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
  color: ${c.textSubtle};
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
  background: ${c.inputBg};
  border: 1px solid ${c.navBorderGold26};
  border-radius: ${r};
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: ${c.goldMain};
    box-shadow: 0 0 0 3px ${c.goldSoft15};
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
  background: ${c.btnNeutralBg};
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover:not(:disabled) {
    background: ${c.btnNeutralBgHover};
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
    color: ${c.statusDanger};
    background: ${c.statusDangerBg};
    border: 1px solid ${c.statusDanger};
  `
      : `
    color: ${c.statusSuccess};
    background: ${c.statusSuccessBg};
    border: 1px solid ${c.statusSuccess};
  `}
`;

export const Hint = styled.p`
  margin: 0 0 16px 0;
  font-size: 0.85rem;
  color: ${c.textSubtle};
  line-height: 1.5;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: clamp(36px, 6vw, 56px) 20px;
  border: 1px dashed ${c.navBorderGold26};
  border-radius: ${r};
  background: ${c.overlayBg};
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
  color: ${c.textSubtle};
  line-height: 1.5;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`;

export const TableWrap = styled.div`
  overflow-x: auto;
  border-radius: ${r};
  border: 1px solid ${c.navBorderGold18};
  background: ${c.overlayBg};
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
    background: ${c.headBg};
  }

  tr:last-child td {
    border-bottom: none;
  }

  td {
    color: ${c.textMuted};
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 600;
  background: ${(p) => {
    if (p.$tone === "success") return c.statusSuccessBg;
    if (p.$tone === "danger") return c.statusDangerBg;
    return c.statusWarningBg;
  }};
  color: ${(p) => {
    if (p.$tone === "success") return c.statusSuccess;
    if (p.$tone === "danger") return c.statusDanger;
    return c.statusWarning;
  }};
`;

export const ProductLink = styled.a`
  color: ${c.goldMain};
  text-decoration: none;
  border-bottom: 1px dashed transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: ${c.goldHover};
    border-color: ${c.goldHover};
  }
`;

export const RowActionBtn = styled.button`
  border: 1px solid ${c.navBorderGold26};
  border-radius: 8px;
  background: transparent;
  color: ${c.goldMain};
  font-size: 0.78rem;
  font-weight: 600;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${c.goldSoft15};
    color: ${c.goldHover};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

export const RowSelect = styled.select`
  width: 190px;
  max-width: 100%;
  border: 1px solid ${c.navBorderGold26};
  border-radius: 8px;
  background: ${c.inputBg};
  color: ${c.goldMain};
  font-size: 0.78rem;
  font-weight: 600;
  padding: 7px 10px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${c.goldMain};
  }

  option {
    background: ${c.deepBlack};
    color: ${c.goldHover};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
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

export const DeleteSection = styled.div`
  margin-top: clamp(40px, 6vw, 56px);
  padding-top: clamp(24px, 4vw, 32px);
  border-top: 1px solid ${c.navBorderGold18};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const DeleteTitle = styled.h3`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.15rem, 2.5vw, 1.35rem);
  font-weight: 700;
  color: ${c.white};
  margin: 0 0 10px 0;
`;

export const DeleteWarning = styled.p`
  margin: 0 0 20px 0;
  font-size: 0.88rem;
  color: ${c.statusDanger};
  line-height: 1.55;
  max-width: 440px;
  background: ${c.statusDangerBg};
  border: 1px solid ${c.statusDanger};
  border-radius: ${r};
  padding: 14px 18px;
`;

export const DangerBtn = styled.button`
  padding: 11px 20px;
  width: fit-content;
  border: 1px solid ${c.statusDanger};
  border-radius: ${r};
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.3px;
  cursor: pointer;
  color: ${c.statusDanger};
  background: ${c.statusDangerBg};
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover:not(:disabled) {
    background: ${c.statusDangerBg};
    border-color: ${c.statusDanger};
    color: ${c.white};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DeleteConfirmBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const DeleteConfirmText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${c.white};
`;

export const DeleteBtnRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;
