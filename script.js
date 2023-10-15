
/*Menu title - mobile friendly */
<script>
    document.querySelector('.menu-icon').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('show');
    });
</script>














let slideIndex = 0;

    function showSlides() {
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
            indicators[i].classList.remove('active');
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = 'flex';
        indicators[slideIndex - 1].classList.add('active');

        setTimeout(showSlides, 2000); // Change slide every 2 seconds
    }

    showSlides();