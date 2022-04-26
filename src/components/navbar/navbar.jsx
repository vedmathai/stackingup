import React, { useEffect, useState } from 'react';
import './navbar.css'
import Logo from '../logo/logo';

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
      </div>
    );
  }
  
  export default NavBar;
  