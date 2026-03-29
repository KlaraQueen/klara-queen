import React from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styled";
import Home from "./pages/Home/index";
import About from "./pages/About/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
