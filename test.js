const hamburger = document.getElementsByClassName("hamburger")[0];
const navMenu = document.getElementsByClassName("nav-menu")[0];

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

function scrollToTop() {
    window.scrollTo(0, 0);
}
let lastScrollPosition = 0;

// Événement de défilement pour cacher le menu
window.addEventListener("scroll", function () {
    const currentScrollPosition = window.pageYOffset;

    // Si on défile vers le bas, on masque le menu
    if (currentScrollPosition > lastScrollPosition) {
        navMenu.classList.remove("active");
    }

    // Mettre à jour la dernière position de défilement
    lastScrollPosition = currentScrollPosition;
});
