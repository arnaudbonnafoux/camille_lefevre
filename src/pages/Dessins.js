import React from 'react';

function Dessins() {
  return (
    <div>
      <div class="art-item">
      <img src="images/dessin_1.jpg" alt="dessin n°1" class="art-image" />
        <div class="art-description">
        <h3>Lignes Insaisissables</h3>
        <p>Ce dessin explore la fluidité et la spontanéité des lignes, capturant un mouvement fugace. 
        Chaque trait, à la fois délicat et affirmé, semble danser sur le papier, évoquant la beauté de l'imprévisible et l'instant suspendu.</p>
        </div>
      </div>

      <div class="art-item">
      <img src="images/dessin_2.jpg" alt="dessin n°2" class="art-image" />
      <div class="art-description">
      <h3>Ombres et Lumières</h3>
      <p>Un jeu subtil entre le clair et l'obscur, où les nuances de gris se mêlent pour créer des contrastes saisissants. 
        Ce dessin révèle des formes évanescentes qui émergent de l'ombre, 
        offrant une vision presque onirique d'un monde en demi-teintes.</p>
      </div>
      </div>

      <div class="art-item">
      <img src="images/dessin_3.jpg" alt="dessin n°3" class="art-image" />
      <div class="art-description">
      <h3>Fragments de Rêve</h3>
      <p>Comme des éclats de souvenirs épars, ce dessin capture l'essence des rêves. 
        Chaque détail semble flotter dans un espace indéfini, entre réalité et imaginaire, 
        invitant le spectateur à assembler les fragments pour en découvrir le mystère caché.</p>
      </div>
      </div>
    </div>
  );
}

export default Dessins;
