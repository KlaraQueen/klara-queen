import React from "react";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
