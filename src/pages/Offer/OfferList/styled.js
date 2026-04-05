import styled from "styled-components";
import { theme } from "../../../theme";

export const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: clamp(15px, 2vw, 25px);
  width: 100%;
  justify-items: stretch;
  justify-content: center;
  box-sizing: border-box;
  animation: fadeInUp 0.8s ease-out;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.smallPhone - 1}px) {
    grid-template-columns: 1fr;
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

export const OfferCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
`;

export const OfferCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  border: 2px solid rgba(212, 175, 55, 0.15);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  animation: fadeInUp 0.8s ease-out both;
  user-select: none;
  position: relative;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);

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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${theme.colors.goldMain},
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
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
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    transform: translateY(-12px);
    box-shadow:
      0 30px 60px rgba(212, 175, 55, 0.3),
      inset 0 1px 0 rgba(212, 175, 55, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-6px);
  }
`;

export const OfferImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${OfferCard}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`;

export const OfferCardContent = styled.div`
  padding: clamp(12px, 2.5vw, 18px);
  display: flex;
  flex-direction: column;
  flex: 1;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
`;

export const OfferCardTitle = styled.h3`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(6px, 1.2vw, 10px) 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`;

export const OfferCardDescription = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  flex: 1;
  font-weight: 300;
`;

export const OfferCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: clamp(10px, 1.5vw, 15px);
  padding-top: clamp(10px, 1.5vw, 15px);
  border-top: 1px solid rgba(212, 175, 55, 0.25);
  gap: clamp(10px, 1.5vw, 15px);

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const OfferPrice = styled.span`
  font-size: clamp(1rem, 1.8vw, 1.3rem);
  color: ${theme.colors.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`;

export const OfferButton = styled.button`
  padding: clamp(6px, 1.2vw, 10px) clamp(15px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${theme.colors.goldMain} 0%,
    #f1d592 100%
  );
  color: ${theme.colors.deepBlack};
  border: none;
  border-radius: 30px;
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
  display: inline-block;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: left 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const OfferListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(30px, 4vw, 50px);
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(20px, 4vw, 40px);
  margin-top: clamp(40px, 6vw, 60px);
  padding: clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.4) 0%,
    rgba(75, 16, 32, 0.3) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 20px;
`;

export const PaginationButton = styled.button`
  flex-shrink: 0;
  width: clamp(45px, 5vw, 60px);
  height: clamp(45px, 5vw, 60px);
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${theme.colors.goldMain} 0%,
    #f1d592 100%
  );
  color: ${theme.colors.deepBlack};
  border: 2px solid ${theme.colors.goldMain};
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);

  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.4);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.5) 0%,
      rgba(241, 213, 146, 0.5) 100%
    );
  }
`;

export const PageInfo = styled.span`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: ${theme.colors.goldMain};
  font-weight: 600;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
`;
