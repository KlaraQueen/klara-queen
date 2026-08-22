import React, { useState } from "react";
import * as S from "./styled";
import Logo from "./Logo/index";
import Labels from "./Labels/index";
import SocialMedia from "./SocialMedia/index";
import { FaBars, FaTimes } from "react-icons/fa";
import { navbarData } from "../../data/navbarData";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <S.NavbarWrapper>
        <S.NavLeft>
          <Logo />
        </S.NavLeft>

        <S.NavCenter>
          <Labels />
        </S.NavCenter>

        <S.NavRight>
          <S.MenuToggle
            type="button"
            onClick={toggleMenu}
            aria-label={
              isMenuOpen
                ? navbarData.aria.closeLabel
                : navbarData.aria.openLabel
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </S.MenuToggle>
        </S.NavRight>
      </S.NavbarWrapper>

      <S.DrawerBackdrop
        type="button"
        data-open={isMenuOpen ? "" : undefined}
        onClick={closeMenu}
      />
      <S.MobileDrawer data-open={isMenuOpen ? "" : undefined}>
        <Labels variant="drawer" onItemClick={closeMenu} />
        <S.MobileSocial>
          <SocialMedia />
        </S.MobileSocial>
      </S.MobileDrawer>
    </>
  );
}

export default Navbar;
