import styled from "styled-components";
import { theme } from "../../theme";

export const BlogContainer = styled.section`
  position: relative;
  z-index: 5;
  width: 100%;
`;

export const BlogContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`;

export const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(30px, 5vw, 50px);
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
`;

export const BlogTitle = styled.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${theme.colors.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`;

export const BlogSubtitle = styled.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(16px, 3.2vw, 36px);
  margin-top: clamp(32px, 6.4vw, 64px);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 821px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 193px;
  object-fit: cover;
  display: block;
`;

export const ArticleBody = styled.div`
  padding: clamp(16px, 3.2vw, 24px);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ArticleDate = styled.span`
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 9px;
`;

export const ArticleTitle = styled.h3`
  font-size: clamp(0.89rem, 1.6vw, 1.13rem);
  color: ${theme.colors.white};
  margin: 0 0 9px 0;
  font-weight: 600;
  line-height: 1.4;
  font-family: "Cormorant Garamond", serif;
`;

export const ArticleExcerpt = styled.p`
  font-size: 0.77rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 13px;

  @media (max-width: ${theme.breakpoints.phone}px) {
    display: none;
  }
`;

export const ReadMoreButton = styled.span`
  font-size: 0.72rem;
  color: ${theme.colors.gold};
  font-weight: 600;
  letter-spacing: 0.8px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 7px;

  ${ArticleCard}:hover & {
    gap: 12px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${ArticleCard}:hover &::after {
    transform: translateX(4px);
  }
`;
