import styled from "styled-components";
import { theme } from "../../../theme";

export const SocialSection = styled.section`
  padding: clamp(30px, 4vw, 50px) clamp(20px, 8vw, 50px);
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

export const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
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

export const Description = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: clamp(40px, 6vw, 60px);
  max-width: 600px;
  line-height: clamp(1.6, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
`;

export const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(200px, 25vw, 250px), 1fr)
  );
  gap: clamp(25px, 4vw, 40px);
  width: 100%;
  margin-top: clamp(20px, 3vw, 30px);
`;

export const PlatformCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(15px, 2vw, 20px);
  padding: clamp(30px, 5vw, 45px);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: clamp(8px, 1vw, 14px);
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(212, 175, 55, 0.15),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    border-color: ${theme.colors.goldMain};
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.18) 0%,
      rgba(212, 175, 55, 0.08) 100%
    );
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(212, 175, 55, 0.15);

    &::before {
      left: 100%;
    }
  }
`;

export const IconWrapper = styled.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${theme.colors.goldMain};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  ${PlatformCard}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`;

export const PlatformName = styled.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: ${theme.colors.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`;

export const PlatformDescription = styled.p`
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: clamp(1.5, 2.5vw, 1.7);
  font-weight: 400;
`;
