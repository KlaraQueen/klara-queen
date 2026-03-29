import styled from "styled-components";
import { theme } from "../../../theme";

export const HeroSection = styled.section`
  padding: clamp(25px, 4vw, 60px) clamp(20px, 8vw, 50px);
  text-align: center;
  position: relative;
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: clamp(30px, 4vw, 60px);
    left: 50%;
    transform: translateX(-50%);
    width: clamp(60px, 15vw, 120px);
    height: clamp(2px, 0.5vw, 3px);
    background: linear-gradient(
      90deg,
      transparent,
      ${theme.colors.goldMain},
      transparent
    );
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 700;
  color: ${theme.colors.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  margin: clamp(35px, 5vw, 50px) 0 clamp(25px, 4vw, 35px);
  text-transform: uppercase;
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: clamp(1.6, 3vw, 1.9);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
  font-family: "Manrope", sans-serif;
`;
