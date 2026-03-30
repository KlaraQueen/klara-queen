import styled from "styled-components";
import { theme } from "../../theme";

export const BlogContainer = styled.section`
  position: relative;
  z-index: 5;
  width: 100%;
`;

export const BlogContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`;

export const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(60px, 10vw, 100px);
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
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: clamp(20px, 4vw, 40px);
  margin-top: clamp(40px, 8vw, 80px);

  @media (max-width: 821px) {
    grid-template-columns: 1fr;
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
  height: 240px;
  object-fit: cover;
  display: block;
`;

export const ArticleBody = styled.div`
  padding: clamp(20px, 4vw, 30px);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ArticleDate = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const ArticleTitle = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: ${theme.colors.white};
  margin: 0 0 12px 0;
  font-weight: 600;
  line-height: 1.4;
  font-family: "Cormorant Garamond", serif;
`;

export const ArticleExcerpt = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 16px;
`;

export const ReadMoreButton = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.gold};
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

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
