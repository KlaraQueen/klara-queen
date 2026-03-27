import styled from "styled-components";
import { theme } from "../../../theme";

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled.li`
  color: ${theme.colors.goldMain};
  font-family: ${theme.fonts.main};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.white};
    text-shadow: 0 0 10px ${theme.colors.goldMain};
  }
`;
