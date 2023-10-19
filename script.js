// Toggle the mobile menu when the mobile icon is clicked
const mobileIcon = document.querySelector('.mobile-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileIcon.addEventListener('click', function () {
    if (mobileMenu.style.display === 'block' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});