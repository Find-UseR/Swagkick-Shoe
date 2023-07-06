let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
}

let currentSlide = 0;
const slides = document.getElementsByClassName("slider-image");

function showSlide(n) {
  currentSlide += n;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlide].style.display = "block";
}

function changeSlide(n) {
  showSlide(n);
}

// Automatic slide change every 3 seconds
setInterval(function() {
  showSlide(1);
}, 3000);

showSlide(0);
