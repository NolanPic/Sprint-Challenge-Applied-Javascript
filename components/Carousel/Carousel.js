/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const state = {
  images: [
    './assets/carousel/mountains.jpeg',
    './assets/carousel/computer.jpeg',
    './assets/carousel/trees.jpeg',
    './assets/carousel/turntable.jpeg'
  ],
  currentIndex: 0
}

function Carousel(images) {
  // carousel parent element
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  
  // left-button
  const leftButton = document.createElement('div');
  leftButton.textContent = ' < ';
  carousel.appendChild(leftButton);

  // images
  images.forEach(image => {
    const imageEl = document.createElement('img');
    imageEl.src = image;

    // initial first image
    if(image === images[0]) {
      imageEl.style.display = 'block';
    }
    carousel.appendChild(imageEl);
  });

  // right-button
  const rightButton = document.createElement('div');
  rightButton.textContent = ' > ';
  carousel.appendChild(rightButton);

  return carousel;
}

document.querySelector('.carousel-container')
  .appendChild(Carousel(state.images));