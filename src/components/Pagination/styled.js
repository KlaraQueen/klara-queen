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
    rgba(46, 8, 16, 0.3) 0%,
    rgba(75, 16, 32, 0.2) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.15);
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
      ? `linear-gradient(135deg, ${theme.colors.goldMain} 0%, #f1d592 100%)`
      : "rgba(46, 8, 16, 0.6)"};
  color: ${(props) =>
    props.active ? theme.colors.deepBlack : theme.colors.goldMain};
  border: 2px solid
    ${(props) =>
      props.active ? theme.colors.goldMain : "rgba(212, 175, 55, 0.4)"};
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) =>
    props.active
      ? "0 6px 20px rgba(212, 175, 55, 0.3)"
      : "0 4px 12px rgba(0, 0, 0, 0.2)"};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
    border-color: ${theme.colors.goldMain};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: rgba(46, 8, 16, 0.4);
  }
`;

export const PageInput = styled.input`
  width: clamp(50px, 8vw, 70px);
  height: clamp(35px, 4vw, 48px);
  border: 2px solid rgba(212, 175, 55, 0.4);
  border-radius: 8px;
  background: rgba(46, 8, 16, 0.6);
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
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    background: rgba(46, 8, 16, 0.8);
  }

  &::placeholder {
    color: rgba(212, 175, 55, 0.5);
  }

  /* Style for number input - remove spinners */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const PageInfo = styled.span`
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  white-space: nowrap;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`;

export const Separator = styled.div`
  width: 1px;
  height: clamp(20px, 2vw, 30px);
  background: rgba(212, 175, 55, 0.2);
`;
