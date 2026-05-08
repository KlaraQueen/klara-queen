import styled from "styled-components";
import { theme } from "../../theme";

export const Page = styled.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: clamp(30px, 5vw, 60px) clamp(14px, 3vw, 32px);
  box-sizing: border-box;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`;

export const Inner = styled.div`
  max-width: 820px;
  margin: 0 auto;
  width: 100%;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: clamp(28px, 4vw, 44px);
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-family: "Cormorant Garamond", serif;
  color: ${theme.colors.white};
  margin: 0 0 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
`;

export const Lead = styled.p`
  margin: 0;
  font-size: clamp(0.9rem, 1.9vw, 1rem);
  color: ${theme.colors.textFaded};
  line-height: 1.55;
`;

export const Body = styled.article`
  color: ${theme.colors.textSubtle};
  font-size: clamp(0.9rem, 1.85vw, 0.98rem);
  line-height: 1.75;

  h2 {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(1.25rem, 2.8vw, 1.45rem);
    color: ${theme.colors.goldHover};
    font-weight: 600;
    margin: clamp(26px, 4vw, 36px) 0 12px;
    letter-spacing: 0.03em;
  }

  p {
    margin: 0 0 14px;
  }

  ul {
    margin: 0 0 16px;
    padding-left: 1.35em;
  }

  li {
    margin-bottom: 8px;
  }

  strong {
    color: ${theme.colors.textMuted};
    font-weight: 600;
  }

  a {
    color: ${theme.colors.goldMain};
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
      color: ${theme.colors.goldHover};
    }
  }

  small {
    display: block;
    margin-top: 28px;
    font-size: 0.85rem;
    color: ${theme.colors.textFaded};
    line-height: 1.55;
  }
`;
