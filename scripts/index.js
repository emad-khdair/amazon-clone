// Amazon Hero Slider

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function goToNextSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  currentSlide++;

  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
}

function goToPrevSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  slides[currentSlide].classList.add("active");
}
