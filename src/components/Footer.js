import React from 'react';
import './Footer.css'; // Importation du fichier CSS pour le footer

function Footer() {
  return (
    <footer className="footer">
      <p>Contact : </p>
      <p>
        <a href="mailto:contact@camillelefevre.com" className="footer-email">contact@camillelefevre.com</a>
      </p>
      <p> &copy; 2024 duanrA. Ce projet est sous 
        <a href="https://opensource.org/licenses/MIT" target="_blank">licence MIT</a>.
        </p>
    </footer>
  );
}

export default Footer;
