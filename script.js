// script.js

const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

// Automatically change slides every 5 seconds
setInterval(nextSlide, 2000);

// Show the first slide initially
showSlide(currentSlideIndex);
