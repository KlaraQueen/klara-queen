import React from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar/index";
import { GlobalStyle } from "./styled";
import Home from "./pages/Home/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Background />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
