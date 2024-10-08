import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/paintings">Peintures</Link></li>
        <li><Link to="/sculptures">Sculptures</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
