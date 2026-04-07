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

export const BlogListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(4px, 1vw, 8px);
  margin-top: clamp(20px, 3vw, 40px);
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: clamp(10px, 1vw, 16px);

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
  width: 100%;
  min-width: 0;
  min-height: 0;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    transition: none;

    &:hover {
      transform: none;
    }
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

/* List View Styles */
export const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1vw, 12px);
  width: 100%;
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

export const ArticleListItem = styled.a`
  display: flex;
  gap: clamp(12px, 3vw, 20px);
  padding: clamp(12px, 2.5vw, 18px);
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  border: 2px solid rgba(212, 175, 55, 0.15);
  border-radius: 15px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  position: relative;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);
  animation: fadeInUp 0.8s ease-out both;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &:hover {
    border-color: rgba(212, 175, 55, 0.5);
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    transform: translateY(-6px);
    box-shadow:
      0 30px 60px rgba(212, 175, 55, 0.3),
      inset 0 1px 0 rgba(212, 175, 55, 0.2);
  }

  &:active {
    transform: translateY(-3px);
  }

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

export const ArticleListImage = styled.img`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${ArticleListItem}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`;

export const ArticleListContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: clamp(8px, 1.5vw, 12px);
  min-width: 0;
`;

export const ArticleListDate = styled.span`
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`;

export const ArticleListTitle = styled.h3`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`;

export const ArticleListExcerpt = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  flex: 1;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ArticleListButton = styled.span`
  font-size: clamp(0.65rem, 1rem, 0.8rem);
  color: ${theme.colors.gold};
  font-weight: 600;
  letter-spacing: 0.7px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;

  ${ArticleListItem}:hover & {
    gap: 10px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${ArticleListItem}:hover &::after {
    transform: translateX(3px);
  }
`;
