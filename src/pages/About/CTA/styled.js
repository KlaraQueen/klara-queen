import styled from "styled-components";
import { theme } from "../../../theme";

export const CTASection = styled.section`
  padding: clamp(80px, 12vw, 140px) clamp(20px, 8vw, 50px);
  text-align: center;
  position: relative;
  animation: fadeInUp 0.8s ease-out;

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

export const CTAText = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: clamp(30px, 4vw, 50px);
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
`;

export const CTAButton = styled.button`
  padding: clamp(14px, 2.5vw, 18px) clamp(35px, 5vw, 60px);
  background: linear-gradient(
    135deg,
    ${theme.colors.goldMain} 0%,
    #f1d592 100%
  );
  color: ${theme.colors.deepBlack};
  border: none;
  border-radius: 50px;
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;
