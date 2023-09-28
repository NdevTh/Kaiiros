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
  
export default BubblesCreator;