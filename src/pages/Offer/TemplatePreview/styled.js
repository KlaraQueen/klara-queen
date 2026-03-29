import styled from "styled-components";
import { theme } from "../../../theme";

export const Container = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(60px, 10vw, 100px) clamp(20px, 5vw, 60px);
  max-width: 1400px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 821px) {
    padding: clamp(40px, 8vw, 60px) clamp(15px, 3vw, 30px);
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border: 2px solid ${theme.colors.goldMain};
  color: ${theme.colors.goldMain};
  padding: clamp(12px, 2.5vw, 16px) clamp(24px, 4vw, 36px);
  border-radius: 30px;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  margin-bottom: clamp(50px, 8vw, 80px);
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(212, 175, 55, 0.15);
    transition: left 0.4s ease;
  }

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
    transform: translateX(-4px);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateX(-2px);
  }
`;

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
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  line-height: 1.1;
  text-transform: uppercase;
  font-style: italic;
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.6;
  font-weight: 300;
`;

export const PriceTag = styled.div`
  display: inline-block;
  background: linear-gradient(
    135deg,
    ${theme.colors.goldMain} 0%,
    #f1d592 100%
  );
  color: ${theme.colors.deepBlack};
  padding: clamp(12px, 2vw, 20px) clamp(25px, 4vw, 40px);
  border-radius: 50px;
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
  width: fit-content;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 10vw, 100px);
`;

export const Section = styled.section`
  animation: fadeInUp 0.6s ease-out 0.2s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(40px, 6vw, 60px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);

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
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(30px, 5vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-style: italic;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.9;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.3px;
`;

export const VideoSection = styled.section`
  animation: fadeInUp 0.6s ease-out 0.3s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(40px, 6vw, 60px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(212, 175, 55, 0.2);
  background: rgba(0, 0, 0, 0.3);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);

  iframe {
    display: block;
    border-radius: 18px;
  }

  @media (max-width: 821px) {
    iframe {
      height: 300px !important;
    }
  }
`;

export const FeaturesSection = styled.section`
  animation: fadeInUp 0.6s ease-out 0.4s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(40px, 6vw, 60px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(20px, 3vw, 30px);
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: clamp(15px, 3vw, 20px);
  padding: clamp(25px, 4vw, 35px);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.08) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border-left: 4px solid ${theme.colors.goldMain};
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.12) 0%,
      rgba(212, 175, 55, 0.05) 100%
    );
    transform: translateX(10px);
    box-shadow:
      0 12px 30px rgba(212, 175, 55, 0.2),
      inset 0 1px 0 rgba(212, 175, 55, 0.15);
  }
`;

export const FeatureCheckmark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(30px, 4vw, 40px);
  width: clamp(30px, 4vw, 40px);
  height: clamp(30px, 4vw, 40px);
  background: ${theme.colors.goldMain};
  color: ${theme.colors.deepBlack};
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.2em;
  flex-shrink: 0;
`;

export const CTASection = styled.section`
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.15) 0%,
    rgba(46, 8, 16, 0.6) 100%
  );
  border: 2px solid rgba(212, 175, 55, 0.25);
  border-radius: 25px;
  padding: clamp(50px, 10vw, 80px);
  text-align: center;
  animation: fadeInUp 0.6s ease-out 0.5s both;
  box-shadow:
    0 20px 60px rgba(212, 175, 55, 0.15),
    inset 0 1px 0 rgba(212, 175, 55, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${theme.colors.goldMain},
      transparent
    );
  }

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
`;

export const CTATitle = styled.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(35px, 6vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1.3;
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: clamp(15px, 3vw, 30px);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(14px, 3vw, 18px) clamp(35px, 6vw, 60px);
  background: linear-gradient(
    135deg,
    ${theme.colors.goldMain} 0%,
    #f1d592 100%
  );
  color: ${theme.colors.deepBlack};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(212, 175, 55, 0.35);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    transition: left 0.4s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 45px rgba(212, 175, 55, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: ${theme.colors.goldMain};
  border: 2px solid ${theme.colors.goldMain};
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${theme.colors.goldMain};
`;
