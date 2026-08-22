import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

const c = theme.colors;
const bp = theme.breakpoints;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Page = styled.main`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: clamp(20px, 4vw, 40px) clamp(16px, 3vw, 32px);
  padding-bottom: clamp(48px, 8vw, 80px);
  box-sizing: border-box;

  @media (max-width: ${bp.tablet}px) {
    padding: 16px 10px 48px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 14px;
`;

export const Title = styled.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  color: ${c.white};
  margin: 0;
`;
