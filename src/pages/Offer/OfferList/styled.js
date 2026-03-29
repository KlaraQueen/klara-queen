import styled from "styled-components";
import { theme } from "../../../theme";

export const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(30px, 4vw, 50px);
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

export const OfferCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const OfferCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.8s ease-out both;
  user-select: none;

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

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }

  &:hover {
    border-color: ${theme.colors.goldMain};
    background: rgba(212, 175, 55, 0.1);
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(212, 175, 55, 0.25);
  }

  &:active {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.15);
  }
`;

export const OfferImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${OfferCard}:hover & {
    transform: scale(1.05);
  }
`;

export const OfferCardContent = styled.div`
  padding: clamp(20px, 3vw, 30px);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const OfferCardTitle = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`;

export const OfferCardDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.6;
  margin: 0 0 auto 0;
  flex: 1;
`;

export const OfferCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: clamp(15px, 2vw, 25px);
  padding-top: clamp(15px, 2vw, 25px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
`;

export const OfferPrice = styled.span`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${theme.colors.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`;

export const OfferButton = styled.button`
  padding: clamp(8px, 1.5vw, 12px) clamp(20px, 3vw, 30px);
  background: linear-gradient(
    135deg,
    ${theme.colors.goldMain} 0%,
    #f1d592 100%
  );
  color: ${theme.colors.deepBlack};
  border: none;
  border-radius: 25px;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  pointer-events: none;

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
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;
