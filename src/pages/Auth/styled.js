import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../theme";

const c = theme.colors;
const bp = theme.breakpoints;
const r = theme.navbar.linkBarRadius;

export const AuthPage = styled.main`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 5vw, 48px) clamp(16px, 4vw, 32px);
  box-sizing: border-box;

  @media (max-width: ${bp.tablet}px) {
    min-height: calc(100vh - 64px);
    padding-top: clamp(32px, 8vw, 56px);
  }
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 440px;
  padding: clamp(28px, 6vw, 42px);
  border-radius: ${theme.navbar.drawerBorderRadius};
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.55) 0%,
    rgba(46, 14, 22, 0.75) 45%,
    rgba(30, 8, 16, 0.88) 100%
  );
  border: 1px solid ${c.navBorderGold18};
  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 247, 220, 0.1);
  backdrop-filter: blur(14px) saturate(115%);
  animation: authCardIn 0.55s ease-out;

  @keyframes authCardIn {
    from {
      opacity: 0;
      transform: translateY(16px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const AuthHeader = styled.header`
  text-align: center;
  margin-bottom: clamp(22px, 4vw, 30px);
`;

export const AuthTitle = styled.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.85rem, 5vw, 2.35rem);
  font-weight: 700;
  color: ${c.white};
  margin: 0 0 10px 0;
  letter-spacing: 0.4px;
  line-height: 1.15;
`;

export const AuthSubtitle = styled.p`
  margin: 0;
  font-size: clamp(0.9rem, 2.2vw, 0.98rem);
  color: rgba(255, 255, 255, 0.68);
  font-weight: 400;
  line-height: 1.5;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 3vw, 20px);
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Label = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: ${c.goldHover};
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  font-size: 1rem;
  font-family: inherit;
  color: ${c.white};
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid ${c.navBorderGold26};
  border-radius: ${r};
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  &:hover {
    border-color: rgba(241, 213, 146, 0.35);
  }

  &:focus {
    border-color: ${c.goldMain};
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18);
    background: rgba(0, 0, 0, 0.22);
  }
`;

export const PasswordWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PasswordInput = styled(Input)`
  padding-right: 48px;
`;

export const TogglePassword = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${c.goldHover};
  cursor: pointer;
  font-size: 1rem;
  transition:
    color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: ${c.white};
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -4px;
`;

export const TextButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.88rem;
  font-family: inherit;
  color: ${c.goldHover};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;

  &:hover {
    color: ${c.white};
  }
`;

export const RouterLink = styled(Link)`
  font-size: 0.88rem;
  color: ${c.goldHover};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;

  &:hover {
    color: ${c.white};
  }
`;

export const PrimaryButton = styled.button`
  margin-top: 4px;
  width: 100%;
  padding: 14px 20px;
  border: 1px solid ${c.navBorderGold48};
  border-radius: ${r};
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${c.deepBlack};
  background: linear-gradient(
    180deg,
    ${c.goldHover} 0%,
    ${c.goldMain} 100%
  );
  box-shadow:
    0 4px 16px rgba(212, 175, 55, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  transition:
    transform 0.2s ease,
    filter 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    filter: brightness(1.06);
    transform: translateY(-1px);
    box-shadow:
      0 8px 24px rgba(212, 175, 55, 0.32),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: clamp(6px, 2vw, 10px) 0;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${c.navDividerGold50},
      transparent
    );
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 18px;
  border-radius: ${r};
  border: 1px solid ${c.navBorderGold26};
  background: rgba(255, 255, 255, 0.06);
  color: ${c.white};
  font-size: 0.92rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${c.navBorderGold48};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    flex-shrink: 0;
    font-size: 1.35rem;
  }
`;

export const AuthFooter = styled.p`
  margin: clamp(18px, 4vw, 24px) 0 0 0;
  text-align: center;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;

  ${RouterLink} {
    margin-left: 6px;
    font-weight: 600;
  }
`;

export const AuthError = styled.div`
  margin: 0 0 16px 0;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.45;
  color: #ffc9c9;
  background: rgba(158, 30, 54, 0.3);
  border-radius: ${r};
  border: 1px solid rgba(241, 120, 140, 0.5);
`;

export const AuthNote = styled.p`
  margin: 0 0 20px 0;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.72);
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${r};
  border: 1px solid ${c.navBorderGold18};
`;

export const AuthSuccess = styled(AuthNote)`
  color: rgba(220, 255, 220, 0.95);
  border-color: rgba(102, 187, 106, 0.45);
  background: rgba(46, 125, 50, 0.2);
`;

export const BackRow = styled.div`
  margin-top: clamp(20px, 4vw, 28px);
  text-align: center;
`;
