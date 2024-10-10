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
            Camille Lefèvre est une artiste multidisciplinaire française née en 1985. 
            Inspirée par la nature et les relations humaines,
            elle explore à travers ses œuvres les émotions subtiles et les liens invisibles qui nous unissent. 
            Peintre et sculptrice, Camille mêle les techniques et les matériaux pour créer des œuvres à la fois sensibles et puissantes. 
            Son travail est marqué par une quête constante d'équilibre entre le visible et l'invisible, entre la matière brute et la finesse des détails. 
            Elle a exposé ses œuvres dans de nombreuses galeries en France et à l'étranger, où elle a su séduire par sa sensibilité et 
            son approche singulière.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
