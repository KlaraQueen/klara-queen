import styled from "styled-components";
import { theme } from "../../../../../theme";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 0 clamp(14px, 3vw, 30px);
  border-radius: 28px;
  border: 1px solid ${theme.colors.goldSoft12};
  background: linear-gradient(
    135deg,
    ${theme.colors.surfaceStrong} 0%,
    ${theme.colors.surfaceMid} 100%
  );
  backdrop-filter: blur(10px);
  box-shadow:
    inset 0 1px 0 ${theme.colors.goldSoft08},
    inset 0 -1px 0 ${theme.colors.shadowLight},
    0 0 0 1px ${theme.colors.goldSoft06};
  overflow: hidden;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${(props) => (props.isLink ? "pointer" : "default")};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${theme.colors.navDividerGold50} 50%,
      transparent 100%
    );
    pointer-events: none;
  }

  &:hover {
    border-color: ${theme.colors.goldSoft20};
    transform: translateY(-8px);
    background: linear-gradient(
      135deg,
      ${theme.colors.panelFormMid} 0%,
      ${theme.colors.panelFormEnd} 100%
    );
    backdrop-filter: blur(10px);
    box-shadow:
      inset 0 1px 0 ${theme.colors.goldSoft12},
      0 0 0 1px ${theme.colors.goldSoft12};
  }
`;
