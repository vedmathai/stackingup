import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import './navbar.css'
import Logo from '../logo/logo';
import NavItem from 'src/components/navitem/navitem';
import Button from 'src/components/button/button';

var classnames = require('classnames');


function NavBar() {
  const navigate = useNavigate()

  var [visible, setVisible] = useState(true);
  var [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = (event) => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };


  window.addEventListener("scroll", handleScroll);

  const onclick_logo_fn = () => {
    navigate(`/`);
  };


  const onclick_go_top_fn = () => {
    window.scrollTo(0, 0);
  };

  const onclick_about_fn = () => {
    navigate(`/about`);
  }

  const onclick_donate_fn = () => {
    navigate(`/buy`);
  }

  return (
    <div className={classnames("navbar", {
      "navbar--hidden": !visible
    })}>
      <div className='logo-container'>
        <Logo onClickFn={onclick_logo_fn}/>
      </div>
      <div className='navitems-container'>
        <div className="navbar-navitem">
          <NavItem label="Go to the Top" onClickFn={onclick_go_top_fn}></NavItem>
        </div>
        <div className="navbar-navitem">
          <NavItem label="About" onClickFn={onclick_about_fn}></NavItem>
        </div>
        <div className="navbar-navitem">
          <Button label="Buy" onClickFn={onclick_donate_fn}></Button>
        </div>
      </div>
    </div>
  );
}
  
  export default NavBar;
  