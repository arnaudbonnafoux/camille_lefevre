import React from 'react';

function Sculptures() {
  return (
    <div>
      <div class="art-item">
      <img src="images/sculpture_1.jpg" alt="Sculpture n°1" class="art-image" />
        <div class="art-description">
        <h3>Équilibre Éternel</h3>
        <p>Cette sculpture en terre cuite représente un arbre majestueux dont les racines s'enroulent autour d'une pierre. 
          Elle évoque la connexion profonde entre la nature et l'humanité. 
          Les détails minutieux des feuilles et des branches rappellent la beauté fragile de l'environnement naturel. 
          Cette œuvre invite le spectateur à réfléchir sur l'importance de préserver notre planète.</p>
        </div>
      </div>

      <div class="art-item">
      <img src="images/sculpture_2.jpg" alt="Sculpture n°2" class="art-image" />
      <div class="art-description">
      <h3>Souffle de l'Âme</h3>
      <p>Faite en acier inoxydable, cette sculpture moderne se dresse comme un hommage aux paysages urbains. 
          Ses lignes épurées et géométriques évoquent la structure des bâtiments et des routes. 
          La réflexion de la lumière sur sa surface métallique crée un jeu d'ombres et de reflets, symbolisant la dynamique de la vie en ville. 
          Cette œuvre questionne notre relation avec l'espace urbain et son impact sur notre quotidien.</p>
      </div>
      </div>

      <div class="art-item">
      <img src="images/sculpture_3.jpg" alt="Sculpture n°3" class="art-image" />
      <div class="art-description">
      <h3>Ondes Silencieuses</h3>
      <p>Cette sculpture en bois sculpté représente un mouvement fluide et gracieux, comme si la matière était animée par une force invisible. 
          Les courbes et les formes organiques de l'œuvre inspirent un sentiment de légèreté et de sérénité. 
          Cette pièce évoque l'idée que la beauté peut résider dans l'éphémère et l'intangible, 
          invitant le spectateur à ressentir l'énergie vitale qui anime toute création.</p>
      </div>
      </div>
    </div>
  );
}

export default Sculptures;
