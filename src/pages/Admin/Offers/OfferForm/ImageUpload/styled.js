import styled from "styled-components";
import { theme } from "../../../../../theme";

const c = theme.colors;

export const Zone = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  border: 2px dashed ${c.goldSoft20};
  border-radius: 12px;
  background: ${c.inputBgLight};
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 80px;
  color: ${c.textFaded};
  font-size: 0.82rem;

  input {
    display: none;
  }

  &:hover {
    border-color: ${c.goldMain};
    background: ${c.goldSoft04};
    color: ${c.goldMain};
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const Item = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${c.goldSoft15};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Remove = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background: ${c.overlayDense};
  color: ${c.pinkAccent};
  font-size: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${Item}:hover & {
    opacity: 1;
  }
`;
