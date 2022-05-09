import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './landing-page.css';
import house_of_cards_drawing from 'src/assets/logo/house-of-cards-drawing.png'
import Logo from 'src/components/logo/logo'
import NavItem from 'src/components/navitem/navitem';
import Button from 'src/components/button/button';


function LandingPage() {
  const navigate = useNavigate();

  const onclick_about_fn = () => {
    navigate('/about')
  }
  
  const onclick_donate_fn = () => {
    navigate('/buy')
  }

  const onclick_book_fn = () => {
    navigate('/introduction')
  }

  const landing_page_image = <img 
    className='landing-page-head-turner-image'
    src={house_of_cards_drawing}
    alt="house-of-cards-drawing"
  />

  return (
    <div>
      <div className="landing-page-container">
        <div className='landing-page-info-container'>
          <div className='landing-page-logo-container'>
            <Logo />
          </div>
          <div className='landing-page-head-turner-mobile-image-container'>
            {landing_page_image}
          </div>
          <div className='landing-page-heading'>
              A web book on all the engineering you would need for a software startup.
          </div>
          <div className='nav-items-container'>
            <div className="landing-page-nav-item">
              <NavItem className="landing-page-nav-item" label='About' onClickFn={onclick_about_fn}></NavItem>
            </div>
            <div className="landing-page-nav-item">
              <NavItem className="landing-page-nav-item" label='Buy' onClickFn={onclick_donate_fn}></NavItem>
            </div>
            <div className="landing-page-nav-item">
              <Button className="landing-page-nav-item" label='Go to the Book' onClickFn={onclick_book_fn}></Button>
            </div>
          </div>
        </div>
        <div className='landing-page-head-turner-image-container'>
          {landing_page_image}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
