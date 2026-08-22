import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { GlobalStyle, AppWrapper, MainContent } from "./styled";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Questions from "./pages/Questions/index";
import Cooperation from "./pages/Cooperation/index";
import Privacy from "./pages/Privacy/index";
import Offer from "./pages/Offer/index";
import Blog from "./pages/Blog/index";
import Article from "./pages/Blog/Article/index";
import Testimonials from "./pages/Testimonials/index";
import Account from "./pages/Account/index";
import Admin from "./pages/Admin/index";
import AdminRoute from "./components/AdminRoute";
import KontoRoute from "./components/KontoRoute";

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Background />
      <Navbar />
      <ScrollToTop />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Article />} />{" "}
          <Route path="/testimonials" element={<Testimonials />} />{" "}
          <Route path="/questions" element={<Questions />} />
          <Route path="/cooperation" element={<Cooperation />} />
          <Route path="/polityka-prywatnosci" element={<Privacy />} />
          <Route
            path="/panel-wejscie"
            element={<Navigate to="/admin" replace />}
          />
          <Route
            path="/login"
            element={<Navigate to="/panel-wejscie" replace />}
          />
          <Route path="/register" element={<Navigate to="/" replace />} />
          <Route path="/forgot-password" element={<Navigate to="/" replace />} />
          <Route
            path="/konto"
            element={
              <KontoRoute>
                <Account />
              </KontoRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
        </Routes>
      </MainContent>
      <Footer />
    </AppWrapper>
  );
}

export default App;
