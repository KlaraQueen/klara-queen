import styled from "styled-components";
import { theme } from "../../../theme";

const c = theme.colors;

export const Page = styled.main`
  position: relative;
  z-index: 5;
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 5vw, 48px) clamp(16px, 4vw, 32px);
`;

export const Card = styled.section`
  width: 100%;
  max-width: 760px;
  min-height: 220px;
  padding: clamp(24px, 4vw, 36px);
  border-radius: 20px;
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.72) 0%,
    rgba(46, 14, 22, 0.88) 45%,
    rgba(30, 8, 16, 0.95) 100%
  );
  border: 1px solid ${c.navBorderGold48 || "rgba(212, 175, 55, 0.45)"};
  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 247, 220, 0.1);
`;

export const Title = styled.h1`
  margin: 0 0 8px;
  text-align: center;
  color: ${c.white};
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.8rem, 4vw, 2.2rem);
`;

export const Subtitle = styled.p`
  margin: 0 0 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);
`;

export const ProductBox = styled.div`
  margin-bottom: 18px;
  border: 1px solid ${c.navBorderGold18};
  border-radius: 12px;
  padding: 14px;
  background: rgba(0, 0, 0, 0.22);
`;

export const ProductTitle = styled.h2`
  margin: 0 0 8px;
  color: ${c.goldMain};
  font-size: 1rem;
`;

export const ProductInfo = styled.p`
  margin: 4px 0;
  color: rgba(255, 255, 255, 0.88);
`;

export const Form = styled.form`
  display: grid;
  gap: 12px;
`;

export const Label = styled.label`
  font-size: 0.82rem;
  color: ${c.goldHover};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid ${c.navBorderGold26};
  background: rgba(0, 0, 0, 0.28);
  color: ${c.white};
`;

export const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.88);
`;

export const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  padding: 12px 20px;
  border: 1px solid ${c.navBorderGold48};
  border-radius: 999px;
  background: linear-gradient(180deg, ${c.goldHover} 0%, ${c.goldMain} 100%);
  color: ${c.deepBlack};
  font-weight: 700;
  cursor: pointer;
`;

export const GhostButton = styled.button`
  padding: 12px 20px;
  border: 1px solid ${c.navBorderGold26};
  border-radius: 999px;
  background: transparent;
  color: ${c.white};
  cursor: pointer;
`;

export const Error = styled.div`
  margin-top: 4px;
  color: #ffc9c9;
  font-size: 0.9rem;
`;

export const SuccessBox = styled.div`
  margin-top: 14px;
  border-radius: 12px;
  border: 1px solid ${c.navBorderGold26};
  background: rgba(0, 0, 0, 0.22);
  padding: 14px;
`;
