import './navbars-complex.css'
import React, { useState } from 'react';
import NavBar from 'src/components/navbar/navbar';
import SideBar from 'src/components/sidebar/sidebar';
import MobileNavBar from 'src/components/mobile-navbar/mobile-navbar';


function NavbarsComplex(props) {
    var [openMenuStatus, setOpenMenuStatus] = useState(false);
    return (
        <>
            <SideBar showSideBar={props.showSideBar} openMenuStatus={openMenuStatus} />
            <MobileNavBar openMenuStatus={openMenuStatus} setOpenMenuStatus={setOpenMenuStatus} />
            <NavBar />
        </> 
            
    );
  }
  
  export default NavbarsComplex;
  