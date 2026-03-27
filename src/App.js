import React from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar/index";
import { GlobalStyle } from "./styled";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Background />
    </>
  );
}

export default App;
