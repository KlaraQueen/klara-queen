import styled from "styled-components";
import { theme } from "../../../theme";

export const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const SocialIcon = styled.a`
  color: ${theme.colors.goldMain};
  font-size: 1.3rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.white};
    transform: translateY(-2px);
    filter: drop-shadow(0 0 8px ${theme.colors.goldMain});
  }
`;
