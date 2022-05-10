import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import LandingPage from 'src/pages/landing-page/landing-page';
import MainPage from 'src/pages/main-page/main-page';
import AboutPage from 'src/pages/about-page/about-page';
import DonatePage from 'src/pages/donate-page/donate-page';
import TermsConditionsPage from './pages/legal-pages/terms-conditions-page';
import PrivacyPolicyPage from './pages/legal-pages/privacy-policy-page';
import RefundPolicyPage from './pages/legal-pages/refund-policy-page';
import reportWebVitals from './reportWebVitals';

const TRACKING_ID = "G-74DL3Z7TSQ"; // OUR_TRACKING_ID

const root = ReactDOM.createRoot(document.getElementById('root'));

const script = document.createElement('script');

if (process.env.NODE_ENV == 'production') {
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-74DL3Z7TSQ";
  script.async = true;

  document.head.appendChild(script);
  const script2 = document.createElement('script');
  script2.text = "\
    window.dataLayer = window.dataLayer || [];\
    function gtag(){dataLayer.push(arguments);}\
    gtag('js', new Date());\
    gtag('config', 'G-74DL3Z7TSQ');\
    gtag('event', 'vedmaa', {'method': 'yoyo'});\
  "
  document.head.appendChild(script2);
}
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:id" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/donate" element={<DonatePage />} />
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
