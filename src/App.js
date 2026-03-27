import React from "react";
import * as S from "./styled";
import Navbar from "./components/Navbar";

function App() {
  return (
    <S.MainWrapper>
      <S.GlobalStyle />
      <Navbar />
    </S.MainWrapper>
  );
}

export default App;
