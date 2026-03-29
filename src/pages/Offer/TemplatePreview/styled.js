import styled from "styled-components";
import { theme } from "../../../theme";

export const Container = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
  max-width: 1200px;
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
`;

export const BackButton = styled.button`
  background: transparent;
  border: 2px solid rgba(212, 175, 55, 0.4);
  color: ${theme.colors.goldMain};
  padding: clamp(10px, 2vw, 15px) clamp(20px, 3vw, 30px);
  border-radius: 25px;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  font-weight: 600;
  font-family: "Cormorant Garamond", serif;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: clamp(40px, 6vw, 60px);

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    border-color: ${theme.colors.goldMain};
    transform: translateX(-5px);
  }

  &:active {
    transform: translateX(-2px);
  }
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 8vw, 60px);
  align-items: center;
  margin-bottom: clamp(60px, 10vw, 100px);
  animation: slideUp 0.6s ease-out;

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
    gap: clamp(30px, 5vw, 50px);
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`;

export const Title = styled.h1`
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  color: ${theme.colors.goldMain};
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
  line-height: 1.2;
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
  background: linear-gradient(135deg, ${theme.colors.goldMain} 0%, #f1d592 100%);
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
  max-height: 400px;
  object-fit: cover;
  border-radius: 20px;
  border: 2px solid rgba(212, 175, 55, 0.2);
  animation: slideInRight 0.6s ease-out;

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 821px) {
    max-height: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 10vw, 100px);
`;

export const Section = styled.section`
  animation: fadeInUp 0.6s ease-out 0.2s both;

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
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(25px, 4vw, 40px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin: 0;
`;

export const VideoSection = styled.section`
  animation: fadeInUp 0.6s ease-out 0.3s both;

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

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(212, 175, 55, 0.2);
  background: rgba(0, 0, 0, 0.3);

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
  padding: clamp(20px, 3vw, 30px);
  background: rgba(212, 175, 55, 0.08);
  border-left: 4px solid ${theme.colors.goldMain};
  border-radius: 10px;
  transition: all 0.3s ease;
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;

  &:hover {
    background: rgba(212, 175, 55, 0.15);
    transform: translateX(8px);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);
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
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(46, 8, 16, 0.5) 100%);
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  padding: clamp(40px, 8vw, 60px);
  text-align: center;
  animation: fadeInUp 0.6s ease-out 0.5s both;

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
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(30px, 5vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 0.5px;
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
  padding: clamp(12px, 2.5vw, 16px) clamp(30px, 5vw, 50px);
  background: linear-gradient(135deg, ${theme.colors.goldMain} 0%, #f1d592 100%);
  color: ${theme.colors.deepBlack};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.4s ease;
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

export const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: ${theme.colors.goldMain};
  border: 2px solid ${theme.colors.goldMain};

  &:hover {
    background: rgba(212, 175, 55, 0.1);
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${theme.colors.goldMain};
`;
