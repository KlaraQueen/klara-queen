import styled from "styled-components";
import { theme } from "../../../../../theme";

const c = theme.colors;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Group = styled.div``;

export const Label = styled.label`
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${c.goldMain};
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-bottom: 6px;
`;

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

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid ${c.goldSoft18};
  background: ${c.inputBg};
  color: ${c.white};
  font-size: 0.88rem;
  font-family: inherit;
  min-height: 100px;
  resize: vertical;
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
