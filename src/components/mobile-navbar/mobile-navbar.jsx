import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import './mobile-navbar.css'
import Logo from '../logo/logo';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function MobileNavBar(props) {
  const navigate = useNavigate();

  const onclickLogoFn = () => {
    navigate(`/`);
  };

  const onClickMenuButtonFn = () => {
    props.setOpenMenuStatus(!props.openMenuStatus);
  }

  const icon = props.openMenuStatus? <CloseIcon fontSize='inherit'></CloseIcon>: <MenuIcon fontSize='inherit'></MenuIcon>;

  return (
    <div className="mobile-navbar">
      <div onClick={() => onClickMenuButtonFn()} className="mobile-navbar-menu-button">
        {icon}
      </div>
      <div className='mobile-navbar-logo-container'>
        <Logo onClickFn={() => onclickLogoFn()}/>
      </div>
    </div>
  );
}
  
  export default MobileNavBar;
  