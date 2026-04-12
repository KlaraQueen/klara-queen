import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../theme";

const t = theme.navbar;
const c = theme.colors;
const bp = theme.breakpoints;

export const LoginButton = styled.a`
  display: flex;
  align-items: center;
  gap: ${t.loginGap};
  padding: ${t.loginPadding};
  color: ${c.goldHover};
  background: ${c.navLoginBg};
  border: 1px solid ${c.navLoginBorder};
  border-radius: ${t.linkBarRadius};
  text-decoration: none;
  cursor: pointer;
  transition:
    color 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease,
    filter 0.3s ease,
    box-shadow 0.3s ease;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.22))
    drop-shadow(0 0 8px rgba(212, 175, 55, 0.22));
  font-weight: 500;
  font-size: ${t.loginFontSize};
  letter-spacing: ${t.loginLetterSpacing};
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: ${bp.tablet}px) {
    font-size: ${t.loginFontSizeTablet};
    padding: ${t.loginPaddingTablet};
    gap: ${t.loginGapTablet};
  }

  @media (max-width: ${bp.phone}px) {
    font-size: ${t.loginFontSizePhone};
    padding: ${t.loginPaddingPhone};
    gap: ${t.loginGapPhone};
  }

  &:hover {
    color: ${c.white};
    background: ${c.navLoginBgHover};
    border-color: rgba(255, 239, 194, 0.5);
    transform: translateY(-2px) scale(1.03);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${c.goldMain})
      drop-shadow(0 0 16px ${c.goldHover});
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  &:active {
    transform: translateY(0) scale(1);
  }
`;

export const LockIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${t.loginIconFontSize};
  flex-shrink: 0;

  @media (max-width: ${bp.tablet}px) {
    font-size: ${t.loginIconFontSizeTablet};
  }

  @media (max-width: ${bp.phone}px) {
    font-size: ${t.loginIconFontSizePhone};
  }
`;

export const LoginText = styled.span`
  font-family: inherit;
  letter-spacing: ${t.loginLetterSpacing};
`;

export const AccountWrap = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(6px, 1.2vw, 10px);
  flex-shrink: 0;
`;

export const AccountLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${t.loginGap};
  padding: ${t.loginPadding};
  color: ${c.goldHover};
  background: ${c.navLoginBg};
  border: 1px solid ${c.navLoginBorder};
  border-radius: ${t.linkBarRadius};
  text-decoration: none;
  font-weight: 500;
  font-size: ${t.loginFontSize};
  letter-spacing: ${t.loginLetterSpacing};
  white-space: nowrap;
  transition:
    color 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  @media (max-width: ${bp.tablet}px) {
    font-size: ${t.loginFontSizeTablet};
    padding: ${t.loginPaddingTablet};
    gap: ${t.loginGapTablet};
  }

  @media (max-width: ${bp.phone}px) {
    font-size: ${t.loginFontSizePhone};
    padding: ${t.loginPaddingPhone};
    gap: ${t.loginGapPhone};
  }

  &:hover {
    color: ${c.white};
    background: ${c.navLoginBgHover};
    border-color: rgba(255, 239, 194, 0.5);
    transform: translateY(-1px);
  }
`;

export const LogoutBtn = styled.button`
  padding: ${t.loginPadding};
  border: 1px solid ${c.navBorderGold26};
  border-radius: ${t.linkBarRadius};
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.78rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  @media (max-width: ${bp.tablet}px) {
    padding: ${t.loginPaddingTablet};
  }

  @media (max-width: ${bp.phone}px) {
    padding: 8px 10px;
    font-size: 0.72rem;
  }

  &:hover {
    color: ${c.white};
    border-color: ${c.navBorderGold48};
    background: rgba(158, 30, 54, 0.35);
  }
`;
