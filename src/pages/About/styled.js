import styled from "styled-components";
import { theme } from "../../theme";

export const PageContainer = styled.div`
  position: relative;
  z-index: 5;
`;

export const SectionContainer = styled.section`
  padding: clamp(50px, 8vw, 100px) clamp(20px, 8vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`;

export const SectionDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${theme.colors.goldMain} 50%,
    transparent 100%
  );
  opacity: 0.25;
  margin: clamp(25px, 3vw, 40px) auto;
  max-width: 200px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 700;
  margin-bottom: clamp(50px, 8vw, 80px);
  color: ${theme.colors.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(2px, 0.5vw, 4px);
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  align-self: center;

  &::after {
    content: "";
    position: absolute;
    bottom: clamp(-12px, -2vw, -18px);
    left: 50%;
    transform: translateX(-50%);
    width: clamp(40px, 10vw, 70px);
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${theme.colors.goldMain} 20%,
      ${theme.colors.goldMain} 80%,
      transparent 100%
    );
  }
`;
