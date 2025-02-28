import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} My Website</p>
      </div>
    </footer>
  );
}

export default Footer;
