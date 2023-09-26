class BubblesCreator {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
    }
  
    createBubbles(numberOfBubbles, delayStep) {
      for (let i = 0; i < numberOfBubbles; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 5 + 1}s`; // Durée de l'animation entre 1 et 6 secondes
        bubble.style.animationDelay = `${Math.random() * delayStep}s`; // Délai de l'animation entre 0 et la valeur de delayStep
  
        this.container.appendChild(bubble);
      }
    }
  }
  
  // Appeler la fonction pour créer les bulles lors du chargement de la page
  document.addEventListener("DOMContentLoaded", function () {
    const bubblesCreator = new BubblesCreator("bubbles-container");
  
    // Créer 20 bulles sans délai initial
  
  
    // Créer 12 bulles avec un délai initial de 1 seconde
    bubblesCreator.createBubbles(8, 1);
  });
  

  // script.js

// Date de fin du compte à rebours (exemple : 1 janvier 2024)
let dateEnd = new Date("October 1, 2023 00:00:00").getTime();

function mettreAJourCompteARebours() {
    let now = new Date().getTime();
    let intervalle = dateEnd - now;

    // Calculer jours, heures, minutes et secondes
    let jours = Math.floor(intervalle / (1000 * 60 * 60 * 24));
    let heures = Math.floor((intervalle % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((intervalle % (1000 * 60 * 60)) / (1000 * 60));
    let secondes = Math.floor((intervalle % (1000 * 60)) / 1000);

    document.getElementById("jours").textContent = String(jours).padStart(2, '0');
    document.getElementById("heures").textContent = String(heures).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("secondes").textContent = String(secondes).padStart(2, '0');

    // Si le compte à rebours est fini, afficher un message
    if (intervalle < 0) {
        clearInterval(updateInterval);
        document.getElementById("compteARebours").textContent = "Terminé!";
    }
}

// Mise à jour du compte à rebours toutes les secondes
let updateInterval = setInterval(mettreAJourCompteARebours, 1000);

// compter
