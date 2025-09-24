// components/Header.js
import React from 'react';
import '../styles/Header.css'; // For header-specific styling

function Header() {
  return (
    <header className="header">
      <a href="#about-us"className="logo">TruTouch</a>
      <nav className="nav">
        <a href="#about-us">About Us</a>
        <a href="#project-description">Project</a>
        <a href="#demonstration">Demo</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact-us">Contact</a>
      </nav>
    </header>
  );
}

export default Header;