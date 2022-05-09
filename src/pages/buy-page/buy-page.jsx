import './buy-page.css';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import tip_jar from 'src/assets/tip-jar-drawing.png'
import NavbarsComplex from 'src/components/navbars-complex/navbars-complex';


function BuyPage() {
  const navigate = useNavigate();
  const onClickPrivacyPolicy = () => {
    navigate('/privacy-policy')
  }

  const onClickRefundPolicy = () => {
    navigate('/refund-policy')
  }

  const onClickTermsAndConditions = () => {
    navigate('/terms-and-conditions')
  }

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute('data-payment_button_id','pl_JT2Xg5LGWJWgIP')
  

    document.getElementById('razorpay-form').appendChild(script);
  
  }, []);
  return (
    <div className='donate-page'>
      <NavbarsComplex showSideBar={false}/>
      <div className='donate-page-section-one'>
        <div className='tip-jar-image-container'>
          <img className='tip-jar-image' src={tip_jar} alt="tip jar" />
        </div>
        <div className='donate-page-headings'>
          <div className='donate-page-heading'>
            No Ads.
          </div>
          <div className='donate-page-heading'>
            Support by buying a copy.
          </div>
          <div className='donate-page-explanation'>
            Ads are very intruisive and take away from the experience. I believe sharing more free information out there can help people build better products, in the end helping society back, hence I am not keeping this information behind a paywall. However, writing and maintaining this book takes time and effort. I will really appreciate it.
          </div>
        </div>

      </div>
      <form id='razorpay-form'></form>
      <div className='hand-waving'>
          👋
      </div>
      <div onClick={() => onClickPrivacyPolicy()} > Privacy policy</div>
      <div onClick={() => onClickTermsAndConditions()}> Terms and Conditions</div>
      <div onClick={() => onClickRefundPolicy()}> Refund Policy</div>
    </div>
  );
}

export default BuyPage;
