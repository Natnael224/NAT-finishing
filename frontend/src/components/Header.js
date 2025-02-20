import React from 'react';
import './Header.css';
import logo from '../assets/images/NAT_logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="NAT Logo" className="logo" />
    </header>
  );
};

export default Header;
