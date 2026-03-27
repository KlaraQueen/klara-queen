import React from "react";
import * as S from "./styled";
import { FaFacebookF, FaYoutube, FaShoppingCart } from "react-icons/fa";

function SocialMedia() {
  return (
    <S.SocialWrapper>
      <S.SocialIcon href="https://facebook.com" target="_blank">
        <FaFacebookF />
      </S.SocialIcon>
      <S.SocialIcon href="https://youtube.com" target="_blank">
        <FaYoutube />
      </S.SocialIcon>
      <S.SocialIcon href="https://allegro.pl" target="_blank">
        <FaShoppingCart title="Allegro" />
      </S.SocialIcon>
    </S.SocialWrapper>
  );
}

export default SocialMedia;
