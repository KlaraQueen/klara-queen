import styled from "styled-components";
import { theme } from "../../../theme";

export const ArticleContainer = styled.section`
  position: relative;
  z-index: 5;
  width: 100%;
`;

export const ArticleContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`;

export const ArticleHeader = styled.div`
  margin-bottom: clamp(40px, 8vw, 60px);
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

export const ArticleTitle = styled.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: "Cormorant Garamond", serif;
  color: ${theme.colors.white};
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 1.3;
`;

export const ArticleDate = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const ArticleImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: clamp(40px, 8vw, 60px);
  display: block;
`;

export const ArticleBody = styled.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  line-height: 1.8;
  letter-spacing: 0.3px;

  h2 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-family: "Cormorant Garamond", serif;
    color: ${theme.colors.white};
    margin: clamp(40px, 6vw, 60px) 0 20px 0;
    font-weight: 600;
    line-height: 1.3;
  }

  h3 {
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    color: ${theme.colors.white};
    margin: clamp(30px, 5vw, 40px) 0 16px 0;
    font-weight: 600;
  }

  p {
    margin: 0 0 20px 0;
    color: rgba(255, 255, 255, 0.8);
  }

  ul,
  ol {
    margin: 20px 0;
    padding-left: 24px;

    li {
      margin-bottom: 12px;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  strong {
    color: ${theme.colors.gold};
    font-weight: 600;
  }

  em {
    color: rgba(255, 255, 255, 0.9);
    font-style: italic;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
    border: 1px solid rgba(255, 255, 255, 0.1);

    th,
    td {
      padding: clamp(12px, 2vw, 16px);
      text-align: left;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    th {
      background: rgba(255, 255, 255, 0.05);
      color: ${theme.colors.gold};
      font-weight: 600;
    }

    tr:hover {
      background: rgba(255, 255, 255, 0.02);
    }
  }

  code {
    background: rgba(0, 0, 0, 0.3);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    color: #a0ff60;
    font-family: "Courier New", monospace;
  }

  hr {
    border: none;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 40px 0;
  }

  a {
    color: ${theme.colors.gold};
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid ${theme.colors.gold};
    padding-left: 20px;
    margin: 30px 0;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }
`;

export const ArticleFooter = styled.div`
  margin-top: clamp(60px, 10vw, 100px);
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.gold};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &::before {
    content: "←";
    transition: transform 0.3s ease;
  }

  &:hover {
    gap: 12px;

    &::before {
      transform: translateX(-4px);
    }
  }
`;
