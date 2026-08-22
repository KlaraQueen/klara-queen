import styled from "styled-components";
import { theme } from "../../../../../theme";

const c = theme.colors;

export const UrlRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: stretch;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const UrlInput = styled.input`
  min-width: 0;
  flex: 1;
  padding: 11px 13px;
  border: 1px solid ${c.goldSoft20};
  border-radius: 10px;
  background: ${c.inputBgLight};
  color: ${c.white};
  font: inherit;
  font-size: 0.82rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${c.goldMain};
    box-shadow: 0 0 0 3px ${c.goldSoft10};
  }
`;

export const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px 15px;
  border: 1px solid ${c.goldMain};
  border-radius: 10px;
  background: ${c.goldSoft10};
  color: ${c.goldMain};
  font: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: ${c.goldSoft20};
  }
`;

export const HelpText = styled.p`
  margin: 8px 0 0;
  color: ${c.textFaded};
  font-size: 0.75rem;
  line-height: 1.4;
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
