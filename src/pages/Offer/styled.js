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

export const OfferDetailPageContainer = styled.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
`;
