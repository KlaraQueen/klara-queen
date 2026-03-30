import styled from "styled-components";
import { theme } from "../../../../theme";

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(50px, 10vw, 80px);
  align-items: center;
  margin-bottom: clamp(80px, 12vw, 120px);
  animation: slideUp 0.6s ease-out;
  padding-bottom: clamp(40px, 6vw, 60px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 821px) {
    grid-template-columns: 1fr;
    gap: clamp(35px, 6vw, 50px);
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
  padding: clamp(30px, 5vw, 50px);
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  word-wrap: break-word;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${theme.colors.goldMain} 50%,
      transparent 100%
    );
  }

  @media (max-width: 821px) {
    gap: clamp(12px, 2vw, 20px);
    padding: clamp(15px, 3vw, 25px);
    align-items: center;
    text-align: center;
    border: 1px solid rgba(212, 175, 55, 0.2);
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.02) 0%,
      transparent 100%
    );
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: ${theme.colors.goldMain};
  margin: clamp(10px, 1.5vw, 15px) 0 clamp(12px, 2vw, 20px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.3;
  text-transform: uppercase;
  font-style: normal;
  word-spacing: 3px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 821px) {
    font-size: clamp(1.3rem, 3.5vw, 1.5rem);
    margin: clamp(5px, 1vw, 10px) 0 clamp(8px, 1.5vw, 12px) 0;
    letter-spacing: 0.7px;
    word-spacing: 2px;
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(0.9rem, 1.6vw, 1.1rem);
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 clamp(20px, 3vw, 35px) 0;
  line-height: 1.65;
  font-weight: 300;
  letter-spacing: 0.3px;
  position: relative;
  padding-bottom: clamp(15px, 2vw, 25px);
  word-wrap: break-word;
  overflow-wrap: break-word;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: clamp(20px, 3.5vw, 45px);
    height: 1px;
    background: ${theme.colors.goldMain};
    opacity: 0.5;
  }

  @media (max-width: 821px) {
    font-size: clamp(0.75rem, 1.3vw, 0.9rem);
    margin: 0 0 clamp(12px, 2vw, 18px) 0;
    line-height: 1.5;
    padding-bottom: clamp(10px, 1.5vw, 15px);

    &::after {
      width: clamp(15px, 2.5vw, 30px);
    }
  }
`;

export const PriceTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: clamp(14px, 2.5vw, 22px);
  width: fit-content;
  margin-top: clamp(8px, 1.5vw, 12px);
  padding: clamp(12px, 1.5vw, 18px) clamp(18px, 2.5vw, 28px);
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 50px;
  cursor: default;

  &::before {
    content: "";
    width: 1px;
    height: clamp(25px, 4vw, 35px);
    background: linear-gradient(
      180deg,
      ${theme.colors.goldMain} 0%,
      rgba(212, 175, 55, 0.2) 100%
    );
  }

  span {
    font-size: clamp(1.3rem, 2.8vw, 2rem);
    font-weight: 700;
    color: ${theme.colors.goldMain};
    font-family: "Cormorant Garamond", serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media (max-width: 821px) {
    gap: clamp(10px, 1.5vw, 15px);
    margin-top: clamp(6px, 1vw, 10px);
    padding: clamp(10px, 1vw, 14px) clamp(14px, 1.5vw, 20px);

    &::before {
      height: clamp(20px, 3vw, 28px);
    }

    span {
      font-size: clamp(0.95rem, 2vw, 1.3rem);
      letter-spacing: 0.6px;
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 25px;
  border: 2px solid rgba(212, 175, 55, 0.25);
  animation: slideInRight 0.6s ease-out;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(212, 175, 55, 0.15);
  transition: all 0.4s ease;

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:hover {
    box-shadow:
      0 40px 80px rgba(0, 0, 0, 0.6),
      0 0 50px rgba(212, 175, 55, 0.25);
    transform: translateY(-5px);
  }

  @media (max-width: 821px) {
    max-height: 350px;
  }
`;
