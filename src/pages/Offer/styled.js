import styled from "styled-components";
import { theme } from "../../theme";

export const OfferContainer = styled.section`
  position: relative;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`;

export const OfferContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`;

export const OfferHeader = styled.div`
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

export const OfferTitle = styled.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${theme.colors.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`;

export const OfferSubtitle = styled.p`
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

/** Tymczasowe powiadomienie (do usunięcia po uzupełnieniu ofert). */
export const TempNotice = styled.aside`
  max-width: 720px;
  margin: 0 auto clamp(28px, 4vw, 40px);
  padding: clamp(16px, 2.5vw, 22px) clamp(18px, 3vw, 26px);
  box-sizing: border-box;
  border-radius: 14px;
  border: 1px solid ${theme.colors.testimonialBorder};
  background: linear-gradient(
    135deg,
    ${theme.colors.cardBg1} 0%,
    ${theme.colors.cardBg3} 100%
  );
  box-shadow: 0 8px 28px ${theme.colors.shadowLight};
`;

export const TempNoticeTitle = styled.p`
  margin: 0 0 10px;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.15rem, 2.4vw, 1.35rem);
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${theme.colors.goldHover};
`;

export const TempNoticeText = styled.p`
  margin: 0;
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: 1.65;
  color: ${theme.colors.textSubtle};
  font-weight: 400;

  strong {
    color: ${theme.colors.textMuted};
    font-weight: 600;
  }
`;

export const OfferDetailPageContainer = styled.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
`;
