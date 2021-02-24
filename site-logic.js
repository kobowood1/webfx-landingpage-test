// get mobile menu icon
const mobileMenu = document.querySelector('.navigation-mobile-menu-icon');
const mobileNav = document.querySelector('.navigation-menu');


// Mobile menu close icon
const mobileMenuImage = document.querySelector('.navigation-mobile-menu-icon img');
let menuIcon = 'images/icon-hamburger.svg';
let altIcon = 'images/icon-close.svg';


mobileMenu.addEventListener('click', function() {
    mobileNav.classList.toggle('show-menu');
    
    if(mobileNav.classList.contains('show-menu')) {
        mobileMenuImage.src = altIcon;
    }   else {
        mobileMenuImage.src = menuIcon;

    }
});

