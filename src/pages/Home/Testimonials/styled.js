import styled from "styled-components";
import { theme } from "../../../theme";

export const TestimonialsSection = styled.section`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 12px;
  padding-left: clamp(16px, 4vw, 60px);
  padding-right: clamp(16px, 4vw, 60px);
  background:
    radial-gradient(
      ellipse at 80% 0%,
      rgba(30, 58, 92, 0.28) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      rgba(20, 35, 55, 0.24) 0%,
      transparent 55%
    ),
    linear-gradient(180deg, rgba(15, 22, 32, 0.95) 0%, #0a0e14 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SectionTitle = styled.h2`
  color: ${theme.colors.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.22vw, 3px);
  font-size: clamp(1.8rem, 4vw, 3.1rem);
  font-weight: 600;
  line-height: 1.3;
  text-shadow:
    0 0 2px rgba(255, 246, 220, 0.32),
    0 0 14px rgba(212, 175, 55, 0.18),
    0 12px 28px rgba(0, 0, 0, 0.22);
  margin: 0;
`;

export const SectionSubtitle = styled.p`
  color: rgba(200, 210, 220, 0.65);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  font-size: clamp(0.62rem, 0.78vw, 0.72rem);
  letter-spacing: clamp(2.8px, 0.38vw, 4.8px);
  text-transform: uppercase;
  line-height: 1;
  max-width: 480px;
  position: relative;
  padding: 0 18px;
  margin: 0 auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: clamp(18px, 2.4vw, 36px);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(180, 190, 210, 0.4) 100%
    );
  }

  &::before {
    right: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(180, 190, 210, 0.4) 100%
    );
  }

  &::after {
    left: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      rgba(180, 190, 210, 0.4) 0%,
      transparent 100%
    );
  }
`;

export const SliderOuter = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(200px, 26vw, 280px);
  margin-top: 0;
`;

export const Track = styled.div`
  flex: 1;
  display: flex;
  gap: clamp(16px, 2vw, 24px);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 0;
  margin: 0;
  align-items: stretch;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TestimonialsGrid = styled.div`
  flex: 0 0 calc(25% - 18px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;
  align-items: stretch;
  height: 100%;
  padding: 0;
  margin: 0;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - 0px);
  }
`;

export const TestimonialCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.08);
  border-radius: 12px;
  padding: clamp(14px, 2vw, 20px);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow:
    inset 0 2px 4px rgba(255, 245, 220, 0.18),
    inset 0 -1px 0 rgba(0, 0, 0, 0.25),
    0 6px 20px rgba(0, 0, 0, 0.2),
    0 0 16px rgba(212, 175, 55, 0.16);
  position: relative;

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
      rgba(212, 175, 55, 0.32) 50%,
      transparent 100%
    );
    pointer-events: none;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    border-color: rgba(212, 175, 55, 0.16);
    box-shadow:
      inset 0 2px 6px rgba(255, 245, 220, 0.24),
      inset 0 -1px 0 rgba(0, 0, 0, 0.35),
      0 9px 28px rgba(0, 0, 0, 0.24),
      0 0 24px rgba(212, 175, 55, 0.3);
    transform: translateY(-3px);
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: clamp(8px, 1vw, 12px);
  font-size: clamp(12px, 1.2vw, 14px);
`;

export const Star = styled.span`
  color: #ffd700;
`;

export const TestimonialText = styled.p`
  font-size: clamp(12px, 1.3vw, 14px);
  line-height: 1.5;
  color: ${theme.colors.testimonialText};
  margin-bottom: clamp(10px, 1.2vw, 15px);
  font-style: normal;
  margin: 0 0 clamp(10px, 1.2vw, 15px) 0;
  font-weight: 500;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const AuthorName = styled.strong`
  font-size: clamp(12px, 1.2vw, 14px);
  color: ${theme.colors.white};
  font-weight: 600;
`;

export const AuthorCompany = styled.span`
  font-size: clamp(10px, 1vw, 12px);
  color: ${theme.colors.testimonialSubtext};
`;

export const ArrowButton = styled.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${theme.colors.goldMain};
  font-size: clamp(0.85rem, 1.1vw, 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 245, 220, 0.07);

  &:hover {
    background: linear-gradient(180deg, #f4d98b 0%, #c8960e 100%);
    border-color: #f4d98b;
    color: #1a0005;
    box-shadow:
      0 10px 26px rgba(0, 0, 0, 0.46),
      0 0 18px rgba(212, 175, 55, 0.32);
    transform: scale(1.08);
  }
`;

export const CTAContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

export const ViewMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  border: 1px solid ${theme.colors.testimonialAccentBorder};
  border-radius: 8px;
  color: ${theme.colors.testimonialAccent};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.testimonialAccentLight};
    border-color: ${theme.colors.testimonialAccent};
    color: ${theme.colors.white};
  }
`;
