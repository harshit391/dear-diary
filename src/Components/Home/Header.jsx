import React from 'react';
import logoSrc from './Dear_Diary-removebg-preview.png';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="home">
      <section style={{ backgroundColor: '#e1c9a6' }}>
        <div id="logo" style={{ justifyContent: 'center' }}>
          <img src={logoSrc} alt="Dear Diary Logo" />
        </div>
      </section>
      <nav className="navbar" style={{ justifyContent: 'center' }}>
        <div>
          <ul style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
            <li><Link to="/">HOME</Link></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><Link to='/login'>LOGIN</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;