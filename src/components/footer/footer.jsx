import React from 'react';
import { useNavigate } from "react-router-dom"
import './footer.css'


function Footer() {
  const navigate = useNavigate()


  const onClickPrivacyPolicy = () => {
    navigate('/privacy-policy')
  }

  const onClickRefundPolicy = () => {
    navigate('/refund-policy')
  }

  const onClickTermsAndConditions = () => {
    navigate('/terms-and-conditions')
  }


  return (
    <div className="footer">
      <div className='legal-links-container'>
        <div className="footer-link">
            <div onClick={() => onClickPrivacyPolicy()} > Privacy policy</div>
        </div>
        <div className='dot'></div>
        <div className="footer-link">
            <div onClick={() => onClickTermsAndConditions()}> Terms and Conditions</div>
        </div>
        <div className='dot'></div>
        <div className="footer-link">
            <div onClick={() => onClickRefundPolicy()}> Refund Policy</div>
        </div>
      </div>
    </div>
  );
}
  
  export default Footer;
  