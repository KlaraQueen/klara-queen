import styled from "styled-components";
import { theme } from "../../theme";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(8px, 2vw, 16px);
  margin-top: clamp(30px, 5vw, 50px);
  padding: clamp(20px, 3vw, 35px);
  background: linear-gradient(
    135deg,
    ${theme.colors.surfaceStrong} 0%,
    ${theme.colors.surfaceMid} 100%
  );
  border: 1px solid ${theme.colors.navBorderGold26};
  border-radius: 15px;
  flex-wrap: wrap;
`;

export const PaginationButton = styled.button`
  flex-shrink: 0;
  width: clamp(35px, 4vw, 48px);
  height: clamp(35px, 4vw, 48px);
  border-radius: 8px;
  background: ${(props) =>
    props.active
      ? `linear-gradient(135deg, ${theme.colors.goldMain} 0%, ${theme.colors.goldHover} 100%)`
      : theme.colors.surfaceStrong};
  color: ${(props) =>
    props.active ? theme.colors.deepBlack : theme.colors.goldMain};
  border: 2px solid
    ${(props) =>
      props.active ? theme.colors.goldMain : theme.colors.navBorderGold38};
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) =>
    props.active
      ? `0 6px 20px ${theme.colors.goldSoft30}`
      : `0 4px 12px ${theme.colors.shadowLight}`};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${theme.colors.goldSoft40};
    border-color: ${theme.colors.goldMain};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: ${theme.colors.surfaceMid};
  }
`;

export const PageInput = styled.input`
  width: clamp(50px, 8vw, 70px);
  height: clamp(35px, 4vw, 48px);
  border: 2px solid ${theme.colors.navBorderGold38};
  border-radius: 8px;
  background: ${theme.colors.surfaceStrong};
  color: ${theme.colors.goldMain};
  text-align: center;
  font-size: clamp(0.65rem, 1rem, 0.8rem);
  font-weight: 600;
  padding: clamp(6px, 1vw, 10px);
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.goldMain};
    box-shadow: 0 0 10px ${theme.colors.goldSoft30};
    background: ${theme.colors.surfaceMid};
  }

  &::placeholder {
    color: ${theme.colors.goldSoft30};
  }

  /* Style for number input - remove spinners */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`;

export const PageInfo = styled.span`
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  color: ${theme.colors.textMuted};
  font-weight: 500;
  white-space: nowrap;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`;

export const Separator = styled.div`
  width: 1px;
  height: clamp(20px, 2vw, 30px);
  background: ${theme.colors.goldSoft20};
`;
