import './refund-policy-page.css';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import tip_jar from 'src/assets/tip-jar-drawing.png'
import NavbarsComplex from 'src/components/navbars-complex/navbars-complex';


function RefundPolicyPage() {
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
  return (
    <div className='donate-page'>
      <NavbarsComplex showSideBar={false}/>
      <div className='donate-page-section-one'>
        <div className='donate-page-headings'>
          <div className='donate-page-heading'>
            Refund Policy
          </div>
          <div className='donate-page-explanation'>
          If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns. The following terms are applicable for any products that You purchased with Us.
            Interpretation

            The words of which the initial letter is capitalized have meanings defined under the following conditions.

            The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            Definitions

            For the purposes of this Return and Refund Policy:

                You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to stackingup.vedmathai.com.
                Service refers to the Website.
                Website refers to stackingup.vedmathai.com, accessible from stackingup.vedmathai.com
                Goods refer to the items offered for sale on the Service.
                Orders mean a request by You to purchase Goods from Us.
                Masterclass means the 8-week mentorship course on the site. Masterclass
                Community means the private group discussion forum on the site.

            Your Order Cancellation Rights

            14 days refund window from the course commencement date on cohort based course, no questions asked. No refund for 'Learn at your own place'.

            There are no refunds applicable for Community.

            In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:

            By email: stackingup@vedmathai.com
            Contact us

            If you have any questions about our Returns and Refunds Policy, please contact us:

            By email: stackingup@vedmathai.com
          </div>
        </div>

      <div onClick={() => onClickPrivacyPolicy()} > Privacy policy</div>
      <div onClick={() => onClickTermsAndConditions()}> Terms and Conditions</div>
      <div onClick={() => onClickRefundPolicy()}> Refund Policy</div>
    </div>
    </div>
  );
}

export default RefundPolicyPage;
