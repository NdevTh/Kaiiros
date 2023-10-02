let counter = 0;
const topHalf = document.querySelector('.top');
const currentFace = document.querySelector('.current');
const nextFace = document.querySelector('.next');
const bottomFace = document.querySelector('.bottom span');

setInterval(() => {
    counter = (counter + 1) % 10;
    bottomFace.textContent = counter;
    nextFace.textContent = counter;
    
    // Animate the top half to "flip" down
    currentFace.style.transform = 'rotateX(-90deg)';
    
    setTimeout(() => {
        currentFace.textContent = counter;
        currentFace.style.transform = 'rotateX(0deg)';
        nextFace.style.transform = 'rotateX(-90deg)';
    }, 500);
}, 1000);
