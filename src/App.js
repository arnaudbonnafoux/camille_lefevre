import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MentionsLegales from './components/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';
import Home from './pages/Home';
import Paintings from './pages/Paintings';
import Sculptures from './pages/Sculptures';
import Dessins from './pages/Dessins';

import './App.css';

function App() {
  return (
    <Router basename="/camille_lefevre">
      <div>
        <Navbar /> {/* Affiche la barre de navigation */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Page d'accueil */}
          <Route path="/paintings" element={<Paintings />} /> {/* Page des peintures */}
          <Route path="/sculptures" element={<Sculptures />} /> {/* Page des sculptures */}
          <Route path="/dessins" element={<Dessins />} /> {/* Page des dessins */}
          <Route path="/mentions-legales" element={<MentionsLegales />} /> {/* Page des mentions légales */}
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} /> {/* Page de la politique de confidentialité */}
        </Routes>
        <Footer /> {/* Affiche le pied de page */}
      </div>
    </Router>
  );
}

export default App;
