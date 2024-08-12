import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <p>&copy; 2024 Nike, Inc. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
