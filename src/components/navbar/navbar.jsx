import React, { useState } from 'react';
import './navbar.css'
import Logo from '../logo/logo';
import NavItem from 'components/navitem/navitem';
import Button from 'components/button/button';

var classnames = require('classnames');


function NavBar() {
    var [visible, setVisible] = useState(true);
    var [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = (event) => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };


    window.addEventListener("scroll", handleScroll);     
     
      
    return (
      <div className={classnames("navbar", {
        "navbar--hidden": !visible
      })}>
        <Logo/>
        <div className='navitems-container'>
          <NavItem label="Go to Top"></NavItem>
          <NavItem label="About"></NavItem>
          <NavItem label="Consulting"></NavItem>
          <Button label="Donate"></Button>
        </div>
      </div>
    );
  }
  
  export default NavBar;
  