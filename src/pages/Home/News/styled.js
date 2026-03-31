import styled from "styled-components";
import { theme } from "../../../theme";

export const NewsSection = styled.section`
  width: 100%;
  margin-top: clamp(40px, 4vw, 80px);
  padding: clamp(0px, 1.4vw, 20px) clamp(16px, 4vw, 60px) 0px;
  background:
    radial-gradient(
      ellipse at 80% 0%,
      rgba(122, 20, 40, 0.38) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      rgba(74, 13, 26, 0.32) 0%,
      transparent 55%
    ),
    linear-gradient(180deg, rgba(46, 8, 16, 0.9) 0%, #0d0003 30%);
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
  line-height: 0.96;
  text-shadow:
    0 0 2px rgba(255, 246, 220, 0.32),
    0 0 14px rgba(212, 175, 55, 0.18),
    0 12px 28px rgba(0, 0, 0, 0.22);
  margin: 0;
`;

export const SectionSubtitle = styled.p`
  color: rgba(241, 213, 146, 0.72);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-weight: 500;
  margin-top: 0;
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
      rgba(212, 175, 55, 0.7) 100%
    );
  }

  &::before {
    right: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.7) 100%
    );
  }

  &::after {
    left: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      rgba(212, 175, 55, 0.7) 0%,
      transparent 100%
    );
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(12px, 1.6vw, 20px);
  
  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.smallPhone}px) {
    grid-template-columns: 1fr;
  }
`;

export const ArticleCard = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 245, 220, 0.09),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 20px 40px rgba(0, 0, 0, 0.22),
    0 0 0 1px rgba(212, 175, 55, 0.06),
    0 0 28px rgba(122, 20, 40, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(241, 213, 146, 0.55) 50%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(212, 175, 55, 0.16);
    transform: translateY(-8px);
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    backdrop-filter: blur(10px);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.18),
      0 12px 28px rgba(0, 0, 0, 0.28),
      0 28px 56px rgba(0, 0, 0, 0.32),
      0 0 32px rgba(212, 175, 55, 0.16),
      0 0 60px rgba(122, 20, 40, 0.12),
      inset 0 1px 0 rgba(255, 245, 220, 0.12),
      0 0 0 1px rgba(212, 175, 55, 0.1);
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: clamp(140px, 20vw, 200px);
  object-fit: cover;
  display: block;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 0;
`;

export const ArticleContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: clamp(14px, 2vw, 20px);
  position: relative;
  z-index: 2;
`;

export const ArticleTitle = styled.h3`
  color: ${theme.colors.goldHover};
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.95rem, 1.2vw, 1.15rem);
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 clamp(8px, 1vw, 12px) 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ArticleExcerpt = styled.p`
  color: rgba(241, 213, 146, 0.8);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.8rem, 0.95vw, 0.9rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ArticleDate = styled.span`
  color: rgba(212, 175, 55, 0.7);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.75rem, 0.85vw, 0.8rem);
  margin-top: clamp(8px, 1vw, 12px);
  padding-top: clamp(8px, 1vw, 12px);
  border-top: 1px solid rgba(212, 175, 55, 0.15);
`;
