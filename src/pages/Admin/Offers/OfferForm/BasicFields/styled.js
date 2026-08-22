import styled from "styled-components";
import { theme } from "../../../../../theme";

const c = theme.colors;
const bp = theme.breakpoints;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: ${bp.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const Full = styled.div`
  grid-column: 1 / -1;
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

export const Select = styled.select`
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid ${c.goldSoft18};
  background: ${c.inputBg};
  color: ${c.white};
  font-size: 0.88rem;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${c.goldMain};
  }

  option {
    background: ${c.deepBlack};
    color: ${c.white};
  }
`;
