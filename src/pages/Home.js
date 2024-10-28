import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="art-item">
        <img
          src={`${process.env.PUBLIC_URL}/images/camille_lefèvre_1.jpg`}
          alt="Sculpture n°1"
          className="art-image"
        />
        <div className="art-description">
          <h3>Le projet...</h3>
          <p>
          Camilla Lefèvre est artifex multiartium Gallica anno 1985 nata.
          Naturae et humanarum relationum inspiratione permota,
          per opera sua subtilia affectus et invisibilia vincula quae nos uniunt explorat.
          Pictor et sculptor, Camilla artes et materias miscet ut opera simul sensilia et potentia creet.
          Labor eius insignitur perpetua quaestione aequilibrii inter visibile et invisibile,
          inter materiam brutam et subtilitatem singularum partium.
          Opera sua in multis galeriis per Franciam et alias terras exhibuit, ubi sensibilitate sua et
          singulari aditu favorem conciliavit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
