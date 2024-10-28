import React from 'react';

function Paintings() {
  return (
    
    <div>
      <div className="art-item">
      <img src="images/peinture_1.jpg" alt="Painting n°1" class="art-image" />
      <div className="art-description">
      <h3>Éphémère Céleste</h3>
      <p>Pictura abstracta, ubi caerulei et viridis toni miscentur ad naturae susurros evocandos.
      Per lineas fluidas et texturas in relief, Camilla Lefèvre spectatorem ad introspectivum iter invitat,
      ubi singulae partes resonare videntur tamquam echo remotus.</p>
      </div>
      </div>

      <div className="art-item">
      <img src="images/peinture_2.jpg" alt="Painting n°2" class="art-image" />
      <div className="art-description">
      <h3>Reflet d'Azur</h3>
      <p>In hoc opere, Camilla coloribus mollibus pastelli utitur ad fragmenta memoriae repraesentanda.
      Formae indistinctae et colores sublucentes atmosphaeram melancholicam creant,
      quasi somnium in quo memoriae sensim in tempore dissolvuntur.</p>
      </div>
      </div>

      <div className="art-item">
      <img src="images/peinture_3.jpg" alt="Painting n°3" class="art-image" />
      <div className="art-description">
      <h3>Murmure de l'Aube</h3>
      <p>Haec pictura contrastus inter umbram et lucem exprimit, cum notis flavi vivi quae in obscuro fundo emicant.
      Camilla quaerit captare effimerum,
      illos fugaces momenta in quibus lux novam dimensionem mundi circumdantis revelat.</p>
      </div>
      </div>
    </div>
  );
}

export default Paintings;
