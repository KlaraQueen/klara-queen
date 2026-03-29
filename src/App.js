import React from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styled";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Questions from "./pages/Questions/index";
import styled from "styled-components";

const MainContent = styled.div`
  flex: 1;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Background />
      <Navbar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
