import React, { useEffect, useState } from 'react';
import '../styles/Header.css'; // For header-specific styling

function Header() {
  const[scrolled,setScrolled]=useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${scrolled ? "scrolled":""}`}>
      <a href="#about-us" className="logo">TruTouch</a> {/* Logo moved directly into header for simpler flex layout */}
      <nav className="main-nav"> {/* Changed class name for clarity */}
        <a href="#about-us">About Us</a>
        <a href="#project-description">Project</a>
        {/* <a href="#demonstration">Demo</a> */}
        <a href="#gallery">Gallery</a>
        <a href="#contact-us">Contact</a>
      </nav>
    </header>
  );
}

export default Header;