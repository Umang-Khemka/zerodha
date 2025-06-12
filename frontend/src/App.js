import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import AuthForm from "./landing_page/authform/AuthForm";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NavBar from "./landing_page/NavBar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import DashBoardPage from "./kiteComponents/DashBoardPage";
import ProtectedRoute from "./extraComponents/ProtectedRoute";
import "./styles/style.css";

function AppContent() {
  const location = useLocation();
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    setIsDashboard(location.pathname.startsWith("/dashboard"));
  }, [location.pathname]);

  return (
    <>
      {!isDashboard && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<AuthForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashBoardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
