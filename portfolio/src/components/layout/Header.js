/*Fathimath Riya Manali Peedikayil*/
/*301419323*/
import React from 'react';
import Navigation from '../Navigation'; 
import logo from '../../assets/logo-transparent-png.png'; 

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo"  /><Navigation />
    </header>
  );
}

export default Header;
