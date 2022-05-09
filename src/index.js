import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import LandingPage from 'src/pages/landing-page/landing-page';
import MainPage from 'src/pages/main-page/main-page';
import AboutPage from 'src/pages/about-page/about-page';
import DonatePage from 'src/pages/donate-page/donate-page';
import BuyPage from 'src/pages/buy-page/buy-page';
import TermsConditionsPage from './pages/terms-conditions-page/terms-conditions-page';
import PrivacyPolicyPage from './pages/privacy-policy-page/privacy-policy-page';
import RefundPolicyPage from './pages/refund-policy-page/refund-policy-page';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:id" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
      <Route path="/refund-policy" element={<RefundPolicyPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    </Routes>
  </BrowserRouter>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
