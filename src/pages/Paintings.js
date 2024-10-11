import React from 'react';

function Paintings() {
  return (
    
    <div>
      <div className="art-item">
      <img src="images/peinture_1.jpg" alt="Painting n°1" class="art-image" />
      <div className="art-description">
      <h3>Éphémère Céleste</h3>
      <p>Une peinture abstraite où les tons de bleu et de vert se mélangent pour évoquer les murmures de la nature. 
      À travers des traits fluides et des textures en relief, Camille Lefèvre invite le spectateur à un voyage introspectif, 
      où chaque détail semble résonner comme un écho lointain.</p>
      </div>
      </div>

      <div className="art-item">
      <img src="images/peinture_2.jpg" alt="Painting n°2" class="art-image" />
      <div className="art-description">
      <h3>Reflet d'Azur</h3>
      <p>Dans cette œuvre, Camille utilise des teintes douces de pastel pour représenter des fragments de mémoire. 
          Les formes floues et les couleurs tamisées créent une atmosphère mélancolique, 
          comme un rêve où les souvenirs se dissolvent peu à peu dans le temps.</p>
      </div>
      </div>

      <div className="art-item">
      <img src="images/peinture_3.jpg" alt="Painting n°3" class="art-image" />
      <div className="art-description">
      <h3>Murmure de l'Aube</h3>
      <p>Cette peinture joue sur les contrastes entre ombre et lumière, avec des touches de jaune vif qui tranchent sur un fond sombre. 
          Camille cherche à capter l'éphémère, 
          ces instants fugaces où la lumière révèle une nouvelle dimension du monde qui nous entoure.</p>
      </div>
      </div>
    </div>
  );
}

export default Paintings;
