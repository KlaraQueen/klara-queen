import styled from "styled-components";
import { theme } from "../../../../theme";

export const CTASection = styled.section`
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.15) 0%,
    rgba(46, 8, 16, 0.6) 100%
  );
  border: 2px solid rgba(212, 175, 55, 0.25);
  border-radius: 25px;
  padding: clamp(35px, 7vw, 60px);
  text-align: center;
  animation: fadeInUp 0.6s ease-out 0.5s both;
  box-shadow:
    0 20px 60px rgba(212, 175, 55, 0.15),
    inset 0 1px 0 rgba(212, 175, 55, 0.15);
  position: relative;
  overflow: hidden;

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
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CTATitle = styled.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(35px, 6vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1.3;
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: clamp(15px, 3vw, 30px);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CTAMutedText = styled.p`
  margin: 0;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  color: ${theme.colors.textSubtle};
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.55;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(14px, 3vw, 18px) clamp(35px, 6vw, 60px);
  background: linear-gradient(
    135deg,
    ${theme.colors.goldMain} 0%,
    #f1d592 100%
  );
  color: ${theme.colors.deepBlack};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(212, 175, 55, 0.35);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    transition: left 0.4s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 45px rgba(212, 175, 55, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: ${theme.colors.goldMain};
  border: 2px solid ${theme.colors.goldMain};
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
  }
`;

export const LiveButton = styled(SecondaryButton)`
  min-width: min(100%, 240px);
  box-sizing: border-box;
`;

export const TertiaryButton = styled(PrimaryButton)`
  background: rgba(10, 8, 14, 0.55);
  color: ${theme.colors.white};
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(20, 15, 28, 0.75);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${theme.colors.goldMain};
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(7, 6, 10, 0.72);
  display: grid;
  place-items: center;
  z-index: 1200;
  padding: 20px;
`;

export const ModalCard = styled.div`
  position: relative;
  width: min(100%, 540px);
  background: linear-gradient(
    165deg,
    rgba(28, 18, 34, 0.96) 0%,
    rgba(16, 12, 24, 0.98) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 18px;
  padding: clamp(22px, 4vw, 30px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.45);
  background: rgba(0, 0, 0, 0.3);
  color: ${theme.colors.white};
  font-size: 1.3rem;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: rgba(212, 175, 55, 0.2);
  }
`;

export const ModalTitle = styled.h4`
  margin: 0 0 10px;
  padding-right: 26px;
  font-size: 1.35rem;
  color: ${theme.colors.goldMain};
  font-family: "Cormorant Garamond", serif;
  text-align: center;
`;

export const ModalText = styled.p`
  margin: 0 0 14px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  text-align: center;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 12px;
  justify-content: center;
`;

export const ModalButton = styled.button`
  min-width: 170px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(212, 175, 55, 0.55);
  background: rgba(212, 175, 55, 0.16);
  color: ${theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    background: rgba(212, 175, 55, 0.28);
  }
`;

export const GuestForm = styled.form`
  display: grid;
  gap: 8px;
  text-align: left;
`;

export const FieldLabel = styled.label`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.84);
`;

export const FieldInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.25);
  background: rgba(0, 0, 0, 0.25);
  color: ${theme.colors.white};
`;

export const CheckboxRow = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.88);
`;

export const FormError = styled.div`
  color: #ffb4b4;
  font-size: 0.86rem;
  margin-top: 4px;
`;

export const BlikNumber = styled.div`
  margin: 10px 0 6px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.35);
  background: rgba(212, 175, 55, 0.12);
  color: ${theme.colors.white};
  font-weight: 700;
  letter-spacing: 0.8px;
`;
