import styled, { keyframes } from "styled-components";
import { theme } from "../../../theme";

const c = theme.colors;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  animation: ${fadeIn} 0.4s ease-out;
`;

export const AddBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border: 1px solid ${c.goldMain};
  border-radius: 10px;
  background: linear-gradient(135deg, ${c.goldSoft15}, ${c.goldSoft05});
  color: ${c.goldMain};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, ${c.goldSoft30}, ${c.goldSoft12});
    color: ${c.goldHover};
    box-shadow: 0 4px 20px ${c.goldSoft20};
  }
`;

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  color: ${c.textDim};
  font-size: 0.9rem;
`;
