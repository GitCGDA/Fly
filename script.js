let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide((slideIndex += n));
}

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    document.querySelector(".slides").style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Automatic slide change every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);