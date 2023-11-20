import BubblesCreator from './BubblesCreator.js';
import CountDown from './CountDown.js';// Appeler la fonction pour créer les bulles lors du chargement de la page

const bubblesCreator = new BubblesCreator("bubbles-container");
bubblesCreator.createBubbles(5, 1);

const countDown = new CountDown("January 01 2024 00:00:00");

const dateNow = new CountDown();
dateNow.Today(Date);

// console.log(dateNow.Today());

// code AIconst hoursCard = document.querySelector(".hours .card");

    
