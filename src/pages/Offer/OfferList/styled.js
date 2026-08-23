import styled from "styled-components";
import { theme } from "../../../theme";

export const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: clamp(15px, 2vw, 25px);
  width: 100%;
  justify-items: stretch;
  padding: 0;
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
  min-width: 0;
  min-height: 0;
`;

export const OfferCard = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.surfaceStrong} 0%,
    ${theme.colors.surfaceMid} 100%
  );
  border: 2px solid ${theme.colors.navBorderGold26};
  border-radius: 22px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  animation: fadeInUp 0.8s ease-out both;
  user-select: none;
  position: relative;
  box-shadow:
    0 14px 32px ${theme.colors.shadowMedium},
    inset 0 1px 0 ${theme.colors.goldSoft10};

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
      ${theme.colors.panelFormMid} 0%,
      ${theme.colors.panelFormEnd} 100%
    );
    transform: translateY(-12px) scale(1.01);
    box-shadow:
      0 26px 50px ${theme.colors.goldSoft30},
      0 12px 24px ${theme.colors.shadowMedium},
      inset 0 1px 0 ${theme.colors.goldSoft20};

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-6px);
  }
`;

export const OfferImage = styled.img`
  display: block;
  width: 100%;
  height: clamp(220px, 27vw, 320px);
  object-fit: cover;
  transform-origin: center center;
  transition:
    transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    filter 0.6s ease;
  filter: brightness(0.9) contrast(1.12) saturate(0.92);

  @media (max-width: 560px) {
    height: 190px;
  }

  @media (hover: hover) and (pointer: fine) {
    ${OfferCard}:hover & {
      transform: scale(1.24);
      filter: brightness(1.04) contrast(1.26) saturate(1.08);
    }
  }
`;

export const OfferCardContent = styled.div`
  padding: clamp(12px, 2.5vw, 18px);
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    transparent 0%,
    ${theme.colors.overlayBg} 100%
  );
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
  color: ${theme.colors.textMuted};
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
  border-top: 1px solid ${theme.colors.goldSoft25};
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
  text-shadow: 0 2px 10px ${theme.colors.goldSoft20};
`;

export const OfferPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 2px;
`;

export const OfferLowestPrice = styled.span`
  color: ${theme.colors.textSubtle};
  font-size: clamp(0.62rem, 1vw, 0.72rem);
  line-height: 1.3;
  letter-spacing: 0.1px;
  overflow-wrap: anywhere;
`;

export const OfferButton = styled.button`
  padding: clamp(6px, 1.2vw, 10px) clamp(15px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${theme.colors.goldMain} 0%,
    ${theme.colors.goldHover} 100%
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
  box-shadow: 0 8px 20px ${theme.colors.goldSoft30};
  display: inline-block;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${theme.colors.goldSoft25};
    transition: left 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px ${theme.colors.goldSoft40};

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
  gap: clamp(4px, 1vw, 8px);
`;

export const OffersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 18px);
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

export const OfferListItem = styled.a`
  display: flex;
  gap: clamp(12px, 3vw, 20px);
  padding: clamp(12px, 2.5vw, 18px);
  background: linear-gradient(
    135deg,
    ${theme.colors.surfaceStrong} 0%,
    ${theme.colors.surfaceMid} 100%
  );
  border: 2px solid ${theme.colors.navBorderGold26};
  border-radius: 18px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  position: relative;
  box-shadow:
    0 14px 32px ${theme.colors.shadowMedium},
    inset 0 1px 0 ${theme.colors.goldSoft10};
  animation: fadeInUp 0.8s ease-out both;

  @media (max-width: 560px) {
    align-items: center;
    gap: 10px;
    padding: 12px;
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
      ${theme.colors.panelFormMid} 0%,
      ${theme.colors.panelFormEnd} 100%
    );
    transform: translateY(-6px) scale(1.01);
    box-shadow:
      0 26px 50px ${theme.colors.goldSoft30},
      0 10px 22px ${theme.colors.shadowMedium},
      inset 0 1px 0 ${theme.colors.goldSoft20};
  }

  &:active {
    transform: translateY(-3px);
  }
`;

export const OfferListImage = styled.img`
  display: block;
  width: clamp(150px, 24vw, 220px);
  height: clamp(150px, 24vw, 220px);
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
  transform-origin: center center;
  transition:
    transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    filter 0.6s ease;
  filter: brightness(0.9) contrast(1.12) saturate(0.92);

  @media (max-width: 560px) {
    width: 140px;
    height: 140px;
  }

  @media (hover: hover) and (pointer: fine) {
    ${OfferListItem}:hover & {
      transform: scale(1.24);
      filter: brightness(1.04) contrast(1.26) saturate(1.08);
    }
  }
`;

export const OfferListContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: clamp(8px, 1.5vw, 12px);
  min-width: 0;

  @media (max-width: 560px) {
    gap: 6px;
  }
`;

export const OfferListTitle = styled.h3`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: ${theme.colors.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`;

export const OfferListDescription = styled.p`
  color: ${theme.colors.textMuted};
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const OfferListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(10px, 2vw, 15px);
  padding-top: clamp(8px, 1.5vw, 12px);
  border-top: 1px solid ${theme.colors.goldSoft25};

  @media (max-width: 560px) {
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

export const OfferListPrice = styled.span`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: ${theme.colors.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px ${theme.colors.goldSoft20};
`;

export const OfferListPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 2px;
`;

export const OfferListLowestPrice = styled.span`
  color: ${theme.colors.textSubtle};
  font-size: clamp(0.62rem, 1vw, 0.72rem);
  line-height: 1.3;
  letter-spacing: 0.1px;
  overflow-wrap: anywhere;
`;

export const OfferListButton = styled.button`
  padding: clamp(8px, 1.5vw, 10px) clamp(16px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${theme.colors.goldMain} 0%,
    ${theme.colors.goldHover} 100%
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
  box-shadow: 0 8px 20px ${theme.colors.goldSoft30};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  min-width: 110px;

  @media (max-width: 560px) {
    width: 100%;
    min-width: 0;
    padding: 10px 16px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${theme.colors.goldSoft25};
    transition: left 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px ${theme.colors.goldSoft40};

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;
