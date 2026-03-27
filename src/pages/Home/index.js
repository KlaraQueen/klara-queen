import React from "react";
import * as S from "./styled";
import Hero from "./Hero/index";

function Home() {
  return (
    <S.PageWrapper>
      <S.ContentOverlay>
        <Hero />
      </S.ContentOverlay>
    </S.PageWrapper>
  );
}

export default Home;
