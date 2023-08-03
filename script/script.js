// Nombre de bulles à créer
const numberOfBubbles = 20;

// Fonction pour créer les bulles et ajouter l'animation
function createBubbles() {
  const container = document.getElementById("bubbles-container");

  for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 5 + 1}s`; // Durée de l'animation entre 1 et 6 secondes
    bubble.style.animationDelay = `${Math.random() * 2}s`; // Délai de l'animation entre 0 et 2 secondes

    container.appendChild(bubble);
  }
}

// Appeler la fonction pour créer les bulles lors du chargement de la page
document.addEventListener("DOMContentLoaded", createBubbles);
