import './legal-pages.css';
import React, { useLayoutEffect } from 'react';
import NavbarsComplex from 'src/components/navbars-complex/navbars-complex';
import Footer from 'src/components/footer/footer';

function RefundPolicyPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 1);
  }, []);
  return (
    <div className='legal-page'>
      <NavbarsComplex showSideBar={false}/>
      <div className='legal-page-headings'>
        <div className='legal-page-heading'>
            Refund Policy
        </div>
        <div className='legal-page-content'>
            <p>If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns. The following terms are applicable for any products that You purchased with Us.</p>
            
            <h2>Interpretation</h2> 

            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>

            <p>The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            
            <h2>Definitions</h2>

            <p>For the purposes of this Return and Refund Policy:</p>
            <ul>
                <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                <li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to stackingup.vedmathai.com.</li>
                <li>Service refers to the Website.</li>
                <li>Website refers to stackingup.vedmathai.com, accessible from stackingup.vedmathai.com</li>
                <li>Goods refer to the items offered for sale on the Service.</li>
                <li>Orders mean a request by You to purchase Goods from Us.</li>
                <li>Masterclass means the 8-week mentorship course on the site. Masterclass</li> 
                <li>Community means the private group discussion forum on the site. </li>
            </ul>

           <h2>Your Order Cancellation Rights</h2>

            <p>14 days refund window from the course commencement date on cohort based course, no questions asked. No refund for 'Learn at your own place'.</p>

            <p>There are no refunds applicable for Community.</p>

            <p>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>

            <p>By email: stackingup@vedmathai.com</p>
            
            <h2>Contact us</h2>

            <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>

            <p>By email: stackingup@vedmathai.com</p>
          </div>
        </div>

      <Footer />
    </div>
  );
}

export default RefundPolicyPage;
