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
    navigate('/donate')
  }

  const onclick_book_fn = () => {
    navigate('/introduction')
  }

  return (
    <div>
      <div className="landing-page-container">
        <div className='landing-page-info-container'>
          <div className='landing-page-logo-container'>
            <Logo />
          </div>
          <div className='landing-page-heading'>
              A web book on all the engineering you would need for a software startup.
          </div>
          <div className='nav-items-container'>
            <NavItem label='About' onClickFn={onclick_about_fn}></NavItem>
            <NavItem label='Donate' onClickFn={onclick_donate_fn}></NavItem>
            <Button label='Go to the Book' onClickFn={onclick_book_fn}></Button>
          </div>
        </div>
        <div className='landing-page-head-turner-image-container'>
          <img 
            className='landing-page-head-turner-image'
            src={house_of_cards_drawing}
            alt="house-of-cards-drawing"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
