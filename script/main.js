import BubblesCreator from './BubblesCreator.js';
import CountDown from './CountDown.js';// Appeler la fonction pour créer les bulles lors du chargement de la page

const bubblesCreator = new BubblesCreator("bubbles-container");
bubblesCreator.createBubbles(9, 1);

const countDown = new CountDown("October 28 , 2023 00:00:00");