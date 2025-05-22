import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">MRKT.AI</h1>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
      </nav>
      <button className="cta-button">Get Started</button>
    </header>
  );
}