import styled from "styled-components";
import { theme } from "../../../../theme";

export const PriceSection = styled.div`
  padding: clamp(20px, 3vw, 30px);
  background: rgba(212, 175, 55, 0.1);
  border-left: 4px solid ${theme.colors.goldMain};
  border-radius: 10px;
  margin-bottom: clamp(25px, 4vw, 40px);
`;

export const PriceLabel = styled.span`
  display: block;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const Price = styled.span`
  display: block;
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: ${theme.colors.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
`;
