import styled from "styled-components";
import { theme } from "../../../../theme";

const c = theme.colors;

export const Panel = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    165deg,
    ${c.panelFormStart} 0%,
    ${c.panelFormMid} 50%,
    ${c.panelFormEnd} 100%
  );
  border: 1px solid ${c.navBorderGold18};
  box-shadow: 0 16px 40px ${c.shadowLight};
  padding: clamp(20px, 3vw, 32px);
  margin-bottom: 24px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid ${c.navBorderGold18};
`;

export const Title = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 700;
  color: ${c.white};
  margin: 0;
`;

export const BackBtn = styled.button`
  padding: 6px 16px;
  border-radius: 8px;
  border: 1px solid ${c.btnNeutralBorder};
  background: ${c.btnNeutralBg};
  color: ${c.textSubtle || "rgba(255,255,255,0.5)"};
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${c.btnNeutralBgHover};
    color: ${c.white};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div``;

export const Label = styled.span`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${c.goldMain};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

export const Value = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${c.white};
`;

export const StatusSelect = styled.select`
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid ${c.goldSoft18};
  background: ${c.inputBg};
  color: ${c.white};
  font-size: 0.85rem;
  font-family: inherit;
  cursor: pointer;
  margin-top: 12px;

  option {
    background: ${c.deepBlack};
    color: ${c.white};
  }
`;

export const InvoiceSection = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid ${c.navBorderGold18};
`;

export const SectionTitle = styled.h3`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${c.goldMain};
  margin: 0 0 12px 0;
`;
