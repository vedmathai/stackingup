import './terms-conditions-page.css';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import tip_jar from 'src/assets/tip-jar-drawing.png'
import NavbarsComplex from 'src/components/navbars-complex/navbars-complex';


function TermsConditionsPage() {
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
            Terms and Conditions
          </div>
          <div className='donate-page-explanation'>
            These terms and conditions outline the rules and regulations for the use of stacking up's Website, located at https://stackingup.vedmathai.com

            By accessing this website we assume you accept these terms and conditions. Do not continue to use stackingup.vedmathai.com if you do not agree to take all of the terms and conditions stated on this page.

            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            Cookies

            We employ the use of cookies. By accessing stackingup.vedmathai.com, you agreed to use cookies in agreement with the stackingup.vedmathai.com's Privacy Policy.

            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            License

            Unless otherwise stated, stackingup.vedmathai.com and/or its licensors own the intellectual property rights for all material on stackingup.vedmathai.com. All intellectual property rights are reserved. You may access this from stackingup.vedmathai.com for your own personal use subjected to restrictions set in these terms and conditions.

            You must not:

                Republish material from stackingup.vedmathai.com
                Sell, rent or sub-license material from stackingup.vedmathai.com
                Reproduce, duplicate or copy material from stackingup.vedmathai.com
                Redistribute content from stackingup.vedmathai.com

            This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Generator and the Privacy Policy Generator.

            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. stackingup.vedmathai.com does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of stackingup.vedmathai.com,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, stackingup.vedmathai.com shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

            stackingup.vedmathai.com reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.

            You warrant and represent that:

                You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
                The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
                The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
                The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.

            You hereby grant stackingup.vedmathai.com a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.

            No use of stackingup.vedmathai.com's logo or other artwork will be allowed for linking absent a trademark license agreement.
            
            iFrames

            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
            Content Liability

            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            Your Privacy

            Please read Privacy Policy
            Reservation of Rights

            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            Removal of links from our website

            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
            Disclaimer

            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:

                limit or exclude our or your liability for death or personal injury;
                limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                limit any of our or your liabilities in any way that is not permitted under applicable law; or
                exclude any of our or your liabilities that may not be excluded under applicable law.

            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.

            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature. 
          </div>
        </div>

      <div onClick={() => onClickPrivacyPolicy()} > Privacy policy</div>
      <div onClick={() => onClickTermsAndConditions()}> Terms and Conditions</div>
      <div onClick={() => onClickRefundPolicy()}> Refund Policy</div>
    </div>
    </div>
  );
}

export default TermsConditionsPage;
