// Header.js

import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="custom-header">
      <div className="container">
        <h1 className="brand">EduFlex</h1>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="./component/AboutUs.js">About</a>
          <a href="/services">Services</a>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
