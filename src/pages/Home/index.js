import React from "react";
import * as S from "./styled";
import Hero from "./Hero/index";
import Showcase from "./Showcase/index";

function Home() {
  return (
    <S.PageWrapper>
      <S.MainContent>
        <S.LeftColumn>
          <Hero />
        </S.LeftColumn>

        <S.RightColumn>
          <Showcase />
        </S.RightColumn>
      </S.MainContent>
    </S.PageWrapper>
  );
}

export default Home;
