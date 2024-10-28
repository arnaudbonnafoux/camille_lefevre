import React from 'react';

function Sculptures() {
  return (
    <div>
      <div class="art-item">
      <img src="images/sculpture_1.jpg" alt="Sculpture n°1" class="art-image" />
        <div class="art-description">
        <h3>Équilibre Éternel</h3>
        <p>Haec scultura ex argilla facta arborem magnificam repraesentat, cuius radices circa lapidem se circumuoluunt.
        Profundam connexionem inter naturam et humanitatem suggerit.
        Minuti foliorum et ramorum details fragilitatem pulchritudinis naturae memorant.
        Hoc opus spectatorem invitat ad cogitandum de necessitate nostrae planetae conservandae.</p>
        </div>
      </div>

      <div class="art-item">
      <img src="images/sculpture_2.jpg" alt="Sculpture n°2" class="art-image" />
      <div class="art-description">
      <h3>Souffle de l'Âme</h3>
      <p>Facta ex ferro inoxydabili, haec sculptura moderna se erigit ut tributo ad paisagia urbana.
      Lineae elegantes et geometricae structuram aedium et viarum evocant.
      Reflexio luminis in superficie metallicae luminum et umbrarum lusionem creat, symbolizans dynamicam vitae in urbe.
      Hoc opus interrogat nostram relationem cum spatio urbano et eius impactum in cotidianum nostrum.</p>
      </div>
      </div>

      <div class="art-item">
      <img src="images/sculpture_3.jpg" alt="Sculpture n°3" class="art-image" />
      <div class="art-description">
      <h3>Ondes Silencieuses</h3>
      <p>Haec sculptura ex ligno sculpa fluens et graciosum motum repraesentat, quasi materia ab invisibili vi animaretur.
      Curvae et formae organicae operis sensum levitatis et serenitatis inspirant.
      Haec pars notionem evocat quod pulchritudo in effimero et intangibili residere potest,
      spectatorem invitans ut sentiat energiam vitalem quae omnem creationem animat.</p>
      </div>
      </div>
    </div>
  );
}

export default Sculptures;
