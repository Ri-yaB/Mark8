import React from 'react';
import './Header.css';
import image from "./images/Mark.png"


function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
        Logo
        </div>
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
