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

  const onclick_go_top_fn = () => {
    window.scrollTo(0, 0);
  };

  const onclick_about_fn = () => {
    navigate(`/about`)
  }

  const onclick_donate_fn = () => {
    navigate(`/donate`)
  }

  return (
    <div className={classnames("navbar", {
      "navbar--hidden": !visible
    })}>
      <Logo/>
      <div className='navitems-container'>
        <NavItem label="Go to the Top" onClickFn={onclick_go_top_fn}></NavItem>
        <NavItem label="About" onClickFn={onclick_about_fn}></NavItem>
        <Button label="Donate" onClickFn={onclick_donate_fn}></Button>
      </div>
    </div>
  );
}
  
  export default NavBar;
  