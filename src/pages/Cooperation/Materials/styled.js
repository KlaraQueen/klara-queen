import styled from "styled-components";
import { theme } from "../../../theme";

export const MaterialsSection = styled.section`
  background: linear-gradient(
    160deg,
    ${theme.colors.panelFormMid} 0%,
    ${theme.colors.panelFormEnd} 100%
  );
  border: 2px solid ${theme.colors.navBorderGold38};
  border-radius: 15px;
  padding: clamp(50px, 8vw, 80px) clamp(30px, 6vw, 60px);
  margin-bottom: clamp(80px, 12vw, 120px);
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

export const MaterialsTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const MaterialsSubtitle = styled.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: ${theme.colors.textSubtle};
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const MaterialsIntro = styled.p`
  color: ${theme.colors.textMuted};
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export const MaterialsSectionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 60px);
`;

export const MaterialCategory = styled.div`
  padding: clamp(30px, 4vw, 40px);
  background: ${(props) =>
    props.highlight ? theme.colors.overlayDense : theme.colors.overlayBg};
  border: 1px solid
    ${(props) =>
      props.highlight ? theme.colors.navBorderGold48 : theme.colors.navBorderGold26};
  border-left: 4px solid ${theme.colors.goldMain};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.highlight ? theme.colors.panelFormEnd : theme.colors.panelTableEnd};
    border-color: ${(props) =>
      props.highlight ? theme.colors.navBorderGold48 : theme.colors.navBorderGold38};
  }
`;

export const MaterialCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(15px, 2vw, 25px);
  margin-bottom: clamp(20px, 3vw, 30px);
`;

export const MaterialIcon = styled.span`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.goldMain};
`;

export const MaterialCategoryTitle = styled.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${theme.colors.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`;

export const MaterialItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`;

export const MaterialItem = styled.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: ${theme.colors.overlayBg};
  border-radius: 8px;
  border: 1px solid ${theme.colors.navBorderGold26};
  border-left: 2px solid ${theme.colors.goldSoft30};
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.overlayDense};
    border-color: ${theme.colors.navBorderGold38};
    border-left-color: ${theme.colors.goldMain};
  }
`;

export const MaterialItemLabel = styled.h4`
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(10px, 1.5vw, 15px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`;

export const MaterialPointsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: ${theme.colors.white};
    margin-bottom: clamp(8px, 1vw, 12px);
    padding-left: 25px;
    position: relative;
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    line-height: 1.6;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: ${theme.colors.goldMain};
      font-weight: 700;
      font-size: 1.1em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
