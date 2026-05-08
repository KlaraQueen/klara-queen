import styled from "styled-components";
import { theme } from "../../theme";

export const ViewToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(6px, 1.2vw, 10px);
  flex-shrink: 0;
`;

export const ViewToggleButton = styled.button`
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  border-radius: 10px;
  border: 2px solid
    ${(props) =>
      props.active ? theme.colors.goldMain : "rgba(212, 175, 55, 0.3)"};
  background: ${(props) =>
    props.active
      ? `linear-gradient(135deg, ${theme.colors.goldMain} 0%, #f1d592 100%)`
      : "rgba(46, 8, 16, 0.5)"};
  color: ${(props) =>
    props.active ? theme.colors.deepBlack : theme.colors.goldMain};
  font-size: clamp(1rem, 2vw, 1.3rem);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${theme.colors.goldMain};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
