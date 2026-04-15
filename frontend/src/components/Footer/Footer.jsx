import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/Frame 2.svg';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (targetId === 'hiring') {
      navigate('/hiring');
      window.scrollTo(0, 0);
    } else if (targetId === 'terms') {
      navigate('/terms-and-conditions');
      window.scrollTo(0, 0);
    } else {
      // Navigate to home if not already there
      navigate('/');

      // After navigating, scroll to the section
      setTimeout(() => {
        if (targetId !== 'home') {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-names">
          <img src={logo} alt="PuroSynergy" className="brand-logo-img" />
          <span className="brand-copyright-text">
            © Copyright 2025-26 PyroSynergy LLP. All rights reserved.
          </span>
        </div>

        <div className="footer-links">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Solutions</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          <a href="#hiring" onClick={(e) => handleNavClick(e, 'hiring')}>Hiring</a>
          <a href="#terms" onClick={(e) => handleNavClick(e, 'terms')}>Policy Pages</a>
        </div>

        <div className="social-icons">
          <a
            href="https://www.instagram.com/pyrosynergy/"
            aria-label="Instagram"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/pyrosynergy/"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;