//Flocons
const numberOfSnowflakes = 100;  // Nombre de flocons
const body = document.querySelector('body');

for (let i = 0; i < numberOfSnowflakes; i++) {
  // Créer un flocon de neige
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Positionner chaque flocon à des endroits aléatoires
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;  // Durée aléatoire
  snowflake.style.animationDelay = `${Math.random() * 5}s`;  // Délai aléatoire

  // Taille aléatoire du flocon
  snowflake.style.width = `${Math.random() * 10 + 5}px`;
  snowflake.style.height = `${Math.random() * 10 + 5}px`;

  body.appendChild(snowflake);
}

//Musique
document.querySelector('.musique-btn').addEventListener('click', () => {
  const audio = document.getElementById('audioPlayer');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
