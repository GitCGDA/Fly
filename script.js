// JavaScript for the slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(slideIndex + 1);
    slideIndex++;
}

function prevSlide() {
    showSlide(slideIndex - 1);
    slideIndex--;
}

// Automatically advance the slider
setInterval(nextSlide, 5000); // Change slide every 5 seconds
showSlide(slideIndex); // Show the initial slide