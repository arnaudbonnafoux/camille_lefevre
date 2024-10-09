import React from 'react';
import './Footer.css'; // Importation du fichier CSS pour le footer

function Footer() {
  return (
    <footer className="footer">
      <p>Contact : </p>
      <p>
        <a href="mailto:contact@camillelefevre.com" className="footer-email">contact@camillelefevre.com</a>
      </p>
      <p>&copy; 2024 Camille Lefèvre. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
