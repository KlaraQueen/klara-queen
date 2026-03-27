import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  z-index: 1000;
`;

export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

export const NavCenter = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

export const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
