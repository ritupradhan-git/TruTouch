// components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} TruTouch Project. All rights reserved.</p>
      {/* Add social media links or quick navigation here */}
    </footer>
  );
}

export default Footer;