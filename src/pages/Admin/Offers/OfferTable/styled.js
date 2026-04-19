import styled, { css } from "styled-components";
import { theme } from "../../../../theme";

const c = theme.colors;
const bp = theme.breakpoints;

export const Table = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    165deg,
    ${c.panelTableStart} 0%,
    ${c.panelTableMid} 50%,
    ${c.panelTableEnd} 100%
  );
  border: 1px solid ${c.navBorderGold18};
  box-shadow: 0 16px 40px ${c.shadowLight};
  backdrop-filter: blur(12px);
  overflow: hidden;
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 120px 100px 100px 130px;
  gap: 12px;
  padding: 14px 20px;
  background: ${c.headBg};
  border-bottom: 1px solid ${c.navBorderGold18};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: ${c.goldMain};

  @media (max-width: ${bp.tablet}px) {
    display: none;
  }
`;

export const HeadCell = styled.span``;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 120px 100px 100px 130px;
  gap: 12px;
  padding: 12px 20px;
  align-items: center;
  border-bottom: 1px solid ${c.goldSoft06};
  transition: background 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${c.goldSoft04};
  }

  @media (max-width: ${bp.tablet}px) {
    grid-template-columns: 50px 1fr;
    grid-template-rows: auto auto;
    gap: 6px 12px;
    padding: 14px 16px;
  }
`;

export const Thumb = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid ${c.goldSoft15};

  @media (max-width: ${bp.tablet}px) {
    grid-row: 1 / 3;
    width: 44px;
    height: 44px;
  }
`;

export const Title = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${c.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Cell = styled.span`
  font-size: 0.82rem;
  color: ${c.textMuted};

  @media (max-width: ${bp.tablet}px) {
    display: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: ${bp.tablet}px) {
    grid-column: 2;
  }
`;

const actionBtn = css`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.25s ease;
`;

export const EditBtn = styled.button`
  ${actionBtn}
  background: ${c.goldSoft10};
  border-color: ${c.goldSoft30};
  color: ${c.goldMain};

  &:hover {
    background: ${c.goldSoft20};
    color: ${c.goldHover};
  }
`;

export const DeleteBtn = styled.button`
  ${actionBtn}
  background: ${c.bordoSoft10};
  border-color: ${c.bordoSoft30};
  color: ${c.bordoAccent};

  &:hover {
    background: ${c.bordoSoft25};
    color: ${c.pinkAccent};
  }
`;

export const Empty = styled.div`
  padding: 48px 20px;
  text-align: center;
  color: ${c.textFaded};
  font-size: 0.9rem;
`;
