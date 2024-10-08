import React from 'react';

function Paintings() {
  return (
    <div>
      <h1>Peintures</h1>
      <div>
        <h2>Echo des silences</h2>
        <img src="images/peinture_1.jpg" alt="Écho des silences" className='painting-img'/>
        <p>Une peinture abstraite où les tons de bleu et de vert se mélangent pour évoquer les murmures de la nature. 
          À travers des traits fluides et des textures en relief, Camille Lefèvre invite le spectateur à un voyage introspectif, 
          où chaque détail semble résonner comme un écho lointain.</p>
      </div>
      <div>
        <h2>Fragments de souvenir</h2>
        <img src="images/peinture_2.jpg" alt="Fragment de souvenir" className='painting-img'/>
        <p>Dans cette œuvre, Camille utilise des teintes douces de pastel pour représenter des fragments de mémoire. 
          Les formes floues et les couleurs tamisées créent une atmosphère mélancolique, 
          comme un rêve où les souvenirs se dissolvent peu à peu dans le temps.</p>
      </div>
      <div>
        <h2>Lumières fugitives</h2>
        <img src="images/peinture_3.jpg" alt="Titre de la peinture 3" className='painting-img' />
        <p>Cette peinture joue sur les contrastes entre ombre et lumière, avec des touches de jaune vif qui tranchent sur un fond sombre. 
          Camille cherche à capter l'éphémère, 
          ces instants fugaces où la lumière révèle une nouvelle dimension du monde qui nous entoure.</p>
      </div>
    </div>
  );
}

export default Paintings;
