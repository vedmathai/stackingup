import './about-page.css';
import React, { useState } from 'react';

import jack_card from 'src/assets/jack-card-drawing.png'
import NavbarsComplex from 'src/components/navbars-complex/navbars-complex';


function AboutPage() {
  return (
    <div className='about-page'>
      <NavbarsComplex showSideBar={false}/>
      <div className='about-head-turner-container'>
        <div className='about-head-turner-first-dialogue'>
          This is a labour of &#10084; by me, Ved Mathai.
        </div>
        <img className='card-image' src={jack_card}/>
        <div className='about-head-turner-second-dialogue'>
          I really hope this has been helpful.
        </div>
        <div className='consultation-call-container'>
          <div className='consultation-call-text-container'>
            <div className='consultation-call-heading'>
              Consultation
            </div>
            <div className='consultation-call-text'>
              If your company or you would like to consult me about tech for startups drop me a message at stackingup@vedmathai.com.
            </div>
          </div>

        </div>
        <div className='workshop-call-container'>
          <div className='workshop-call-text-container'>
            <div className='workshop-call-heading'>
              Workshop
            </div>
            <div className='workshop-call-text'>
              I can hold a workshop or a series of workshops either online,
              if in Bangalore, offline, for your founding or tech team covering
              some or even all of the topics here.
              Again, drop me a message at stackingup@vedmathai.com if you would like to hold one.
            </div>
          </div>
        </div>
        <div className='hand-waving'>
          👋
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
