import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // Import de Link pour le routage interne
import { ReactComponent as InstagramIcon } from './InstagramIcon.svg';
import { ReactComponent as MailIcon } from './MailIcon.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-contact">
        <a href="mailto:contact@camillelefevre.com" className="footer-email">
          <MailIcon className="footer-logo" style={{ fill: '#05034F' }}/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <InstagramIcon className="footer-logo" style={{ fill: '#05034F' }}/>
        </a>
      </p>
      <p style={{ textAlign: 'center' }}>
        &copy; 2024 duanrA. Ce projet est sous <a href="https://opensource.org/licenses/MIT" 
        target="_blank" rel="noopener noreferrer" className="footer-email">licence MIT</a>.
      </p>
      <p style={{ textAlign: 'center' }}>
        <Link className='footer-email' to="/mentions-legales">Mentions Légales</Link> | 
        <Link className='footer-email' to="/politique-confidentialite"> Politique de Confidentialité</Link>
      </p>
    </footer>
  );
}

export default Footer;
