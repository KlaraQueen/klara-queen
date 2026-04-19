import styled from "styled-components";
import { theme } from "../../../../../theme";

const c = theme.colors;

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid ${c.goldSoft18};
  background: ${c.inputBg};
  color: ${c.white};
  font-size: 0.88rem;
  font-family: inherit;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${c.goldMain};
    box-shadow: 0 0 0 3px ${c.goldSoft10};
  }

  &::placeholder {
    color: ${c.textPlaceholder};
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 6px;
`;

export const RemoveBtn = styled.button`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid ${c.bordoSoft30};
  background: ${c.bordoSoft10};
  color: ${c.bordoAccent};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${c.bordoSoft30};
    color: ${c.pinkAccent};
  }
`;

export const AddBtn = styled.button`
  padding: 6px 16px;
  border-radius: 8px;
  border: 1px dashed ${c.goldSoft30};
  background: transparent;
  color: ${c.goldMain};
  font-size: 0.82rem;
  cursor: pointer;
  margin-top: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: ${c.goldSoft08};
    border-color: ${c.goldMain};
  }
`;
