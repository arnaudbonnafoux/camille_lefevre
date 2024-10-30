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
          <h3>Le Projet...</h3>
          <p>
          Camillae Lefèvre ars naturam, identitatem, et lucis effectus subtiliter pertractat, 
          miscens formas vivas cum texturis profundas cogitationes evocantibus. 
          In pictura, colores intensos et tenues perluciditatis transitus adhibet, 
          vitam et memoriae fragilitatem sublinens. In sculptura, materiam crassam et 
          lepidam conjungit ut humanitatis essentiam exprimat et identitatis quaestiones propositas elevet. 
          In delineationibus, lucem et umbras sic pertractat ut formae simplices profundum sensum et spiritum intimum revelent. 
          Artis peritia Camillae, vita ac mundi harmoniae partes enucleans, contemplationem et cogitationem incitat.
          </p>
        </div>
      </div>
      <div className="art-item">
        <img
          src={`${process.env.PUBLIC_URL}/images/camille_lefèvre_2.jpg`}
          alt="Sculpture n°1"
          className="art-image"
        />
        <div className="art-description">
          <h3>Biographie</h3>
          <p>
          Camilla Lefèvre est artifex francaise cuius opera varia sunt, per picturam, sculpturam, ac delineationem. 
          Nata in Gallia, artem amat et ingenium adhibet ut formas et imagines captet quae vitam ac humanitatem exprimunt. 
          Per penniculum et sculpturam, animi sensus ac pulchritudinem naturae humanae explorat, artem creans quae contemplationem 
          et admirationem excitat.
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
