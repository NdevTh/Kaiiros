import BubblesCreator from './BubblesCreator.js';
import CompteRebours from './CompteRebours.js';// Appeler la fonction pour créer les bulles lors du chargement de la page

const bubblesCreator = new BubblesCreator("bubbles-container");
bubblesCreator.createBubbles(9, 1);

const compteARebours = new CompteRebours("October 2 , 2023 00:00:00");