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

export const SectionTitle = styled.h3`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${c.goldMain};
  margin: 20px 0 12px 0;
`;

export const MarkBtn = styled.button`
  margin-top: 16px;
  padding: 10px 24px;
  border-radius: 10px;
  border: 1px solid ${c.goldMain};
  background: linear-gradient(135deg, ${c.goldMain}, ${c.goldHover});
  color: ${c.deepBlack};
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${c.goldSoft18};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const PdfRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NumRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 8px;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const NumInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${c.goldSoft18};
  background: ${c.inputBg};
  color: ${c.white};
  font-size: 0.9rem;
  font-family: inherit;

  &::placeholder {
    color: ${c.textPlaceholder};
  }
`;

export const DatePick = styled.input`
  flex: 0;
  width: auto;
  min-width: 10.5rem;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${c.goldSoft18};
  background: ${c.inputBg};
  color: ${c.white};
  font-size: 0.88rem;
  font-family: inherit;
  color-scheme: dark;
`;

export const NumHint = styled.span`
  font-size: 0.74rem;
  color: ${c.textFaded || "rgba(255,255,255,0.5)"};
  flex-basis: 100%;
  margin-top: -4px;
`;

export const SaveNumBtn = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${c.goldMain};
  background: transparent;
  color: ${c.goldMain};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background: ${c.goldSoft08};
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const PdfLink = styled.a`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 8px;
  border: 1px solid ${c.goldMain};
  background: transparent;
  color: ${c.goldMain};
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${c.goldSoft08};
    color: ${c.goldHover};
  }
`;

export const UploadBtn = styled.button`
  padding: 8px 20px;
  border-radius: 8px;
  border: 1px solid ${c.goldSoft18};
  background: ${c.btnNeutralBg};
  color: ${c.textSubtle || "rgba(255,255,255,0.5)"};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${c.btnNeutralBgHover};
    color: ${c.white};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
