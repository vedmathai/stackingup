import './donate-page.css';
import React, { useEffect } from 'react';
import tip_jar from 'src/assets/tip-jar-drawing.png'
import NavbarsComplex from 'src/components/navbars-complex/navbars-complex';


function DonatePage() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute('data-payment_button_id','pl_JS3OwehgVuS6Q7')
  
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
            Take what you like, pay what you like.
          </div>
          <div className='donate-page-heading'>
            No Ads.
          </div>
          <div className='donate-page-heading'>
            No Paywall.
          </div>
          <div className='donate-page-explanation'>
            Ads are very intruisive and take away from the experience. I believe sharing more free information out there can help people build better products, in the end helping society back, hence I am not keeping this information behind a paywall. However, writing and maintaining this book takes time and effort. Please do contribute with how much ever you can. And if you can afford it do contribute proportional to how much you think this book helped you. I will really appreciate it.
          </div>
        </div>

      </div>
      <form id='razorpay-form'></form>
      <div className='hand-waving'>
          👋
      </div>

      

    </div>
  );
}

export default DonatePage;
