import React from 'react';

function Dessins() {
  return (
    <div>
      <div class="art-item">
      <img src="images/dessin_1.jpg" alt="dessin n°1" class="art-image" />
        <div class="art-description">
        <h3>Lignes Insaisissables</h3>
        <p>Haec pictura fluiditatem et spontaneitatem linearum explorat, motum fugacem capiens.
        Unusquisque tractus, simul delicatus et firmus, videtur in charta saltare,
        pulchritudinem inopinati et momenti suspensi evocans.</p>
        </div>
      </div>

      <div class="art-item">
      <img src="images/dessin_2.jpg" alt="dessin n°2" class="art-image" />
      <div class="art-description">
      <h3>Ombres et Lumières</h3>
      <p>Ludus subtilis inter clarum et obscurum, ubi variae umbrae colorum se miscere ad contrastus mirabiles creandos.
      Hoc opus figuras evanescentes ostendit quae ex tenebris emergunt,
      visionem fere somniorum praebens mundi dimidiatarum umbrarum.</p>
      </div>
      </div>

      <div class="art-item">
      <img src="images/dessin_3.jpg" alt="dessin n°3" class="art-image" />
      <div class="art-description">
      <h3>Fragments de Rêve</h3>
      <p>Velut fragmenta memoriarum dispersa, hic pictura essentiam somniorum capit.
      Singulae partes videntur in spatio indefinito fluitare, inter realitatem et imaginationem,
      spectatorem invitantes ut fragmenta coniungat et arcanum absconditum detegat.</p>
      </div>
      </div>
    </div>
  );
}

export default Dessins;
