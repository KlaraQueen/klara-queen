import styled from "styled-components";
import { theme } from "../../../theme";

export const OfferDetailsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(20px, 5vw, 40px);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 821px) {
    padding-top: 100px;
    align-items: flex-start;
  }
`;

export const OfferDetailsModal = styled.div`
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.95) 0%,
    rgba(75, 16, 32, 0.95) 100%
  );
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 20px;
  padding: clamp(30px, 5vw, 50px);
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 821px) {
    max-height: 85vh;
    border-radius: 15px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: clamp(20px, 3vw, 40px);
  right: clamp(20px, 3vw, 40px);
  background: linear-gradient(135deg, ${theme.colors.goldMain} 0%, #f1d592 100%);
  color: ${theme.colors.deepBlack};
  border: none;
  width: clamp(40px, 6vw, 50px);
  height: clamp(40px, 6vw, 50px);
  border-radius: 50%;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.isFullPage ? "1fr" : "1fr 1fr")};
  gap: clamp(30px, 5vw, 50px);
  margin-bottom: clamp(30px, 5vw, 50px);

  @media (max-width: 821px) {
    grid-template-columns: 1fr;
    gap: clamp(25px, 4vw, 40px);
  }
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(20px, 3vw, 30px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const DetailsDescription = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  margin: 0 0 clamp(25px, 4vw, 40px) 0;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(15px, 3vw, 25px);
  margin-top: auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(12px, 2.5vw, 16px) clamp(25px, 4vw, 40px);
  background: linear-gradient(135deg, ${theme.colors.goldMain} 0%, #f1d592 100%);
  color: ${theme.colors.deepBlack};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;

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
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: ${theme.colors.goldMain};
  border: 2px solid ${theme.colors.goldMain};

  &:hover {
    background: rgba(212, 175, 55, 0.1);
  }
`;

export const OfferDetailsFullPage = styled.div`
  width: 100%;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
