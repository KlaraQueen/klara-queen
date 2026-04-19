import React from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { GlobalStyle, AppWrapper, MainContent } from "./styled";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Questions from "./pages/Questions/index";
import Cooperation from "./pages/Cooperation/index";
import Offer from "./pages/Offer/index";
import Blog from "./pages/Blog/index";
import Article from "./pages/Blog/Article/index";
import Testimonials from "./pages/Testimonials/index";
import Login from "./pages/Auth/Login/index";
import Register from "./pages/Auth/Register/index";
import ForgotPassword from "./pages/Auth/ForgotPassword/index";
import Account from "./pages/Account/index";
import Admin from "./pages/Admin/index";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/konto"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
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
