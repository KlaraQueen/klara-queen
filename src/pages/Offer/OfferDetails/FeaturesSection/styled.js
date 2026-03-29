import styled from "styled-components";
import { theme } from "../../../../theme";

export const FeaturesSection = styled.div`
  margin-bottom: clamp(30px, 5vw, 50px);
`;

export const FeaturesTitle = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: ${theme.colors.goldMain};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(12px, 2vw, 18px);
`;

export const FeatureItem = styled.li`
  background: rgba(212, 175, 55, 0.08);
  padding: clamp(12px, 2vw, 18px);
  border-radius: 8px;
  border-left: 3px solid ${theme.colors.goldMain};
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  position: relative;
  padding-left: clamp(30px, 4vw, 40px);
  transition: all 0.3s ease;

  &::before {
    content: "✓";
    position: absolute;
    left: clamp(10px, 2vw, 15px);
    color: ${theme.colors.goldMain};
    font-weight: 700;
    font-size: 1.2em;
  }

  &:hover {
    background: rgba(212, 175, 55, 0.15);
    transform: translateX(5px);
  }
`;

export const FeatureCheckmark = styled.span`
  display: none;
`;
