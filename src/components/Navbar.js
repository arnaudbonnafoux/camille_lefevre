// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Si tu utilises react-router pour la navigation
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Camille Lefèvre</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/paintings">Peintures</Link>
        </li>
        <li>
          <Link to="/sculptures">Sculptures</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
