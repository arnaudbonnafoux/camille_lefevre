import React from 'react';
import './Footer.css';
import { ReactComponent as Logo } from './instagram_icon.svg';
import { ReactComponent as Logo_2 } from './mail_icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-contact">
        <a href="mailto:contact@camillelefevre.com" className="footer-email"><Logo_2 
        className="footer-logo" style={{ fill: '#05034F'}}/></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" 
        className="footer-icon">
          <Logo className="footer-logo" style={{ fill: '#05034F'}}/>
        </a>
      </p>
      <p style={{textAlign: 'center',}}>
        &copy; 2024 duanrA. Ce projet est sous<a href="https://opensource.org/licenses/MIT" 
        target="_blank" className="footer-email"> licence MIT</a>.
      </p>
    </footer>
  );
}

export default Footer;
