// --------------------------------- //
// --- Slideshow images La Carte --- //
// --------------------------------- //
let slideIndex = 1;
let autoSlideInterval;

showSlides(slideIndex);

// Fonction pour détecter la largeur de l'écran
function isMobileView() {
  return window.innerWidth <= 768; // Ajuster cette valeur pour définir votre breakpoint mobile/desktop
}

// Next/previous controls
function plusSlides(n) {
  if (isMobileView()) {
    showSlides(slideIndex += n);
  }
}

// Thumbnail image controls
function currentSlide(n) {
  if (isMobileView()) {
    showSlides(slideIndex = n);
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (isMobileView()) {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
      dots[i].style.display = "inline-block";  // S'assurer que les dots sont visibles sur mobile
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";

    // Démarrer le diaporama automatique
    startAutoSlide();
  } else {
    // Sur desktop, montrer toutes les images côte à côte
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
    }
    // Cacher les points de navigation uniquement en version desktop
    for (i = 0; i < dots.length; i++) {
      dots[i].style.display = "none";
    }

    // Arrêter le diaporama automatique sur desktop
    clearInterval(autoSlideInterval);
  }
}

// Fonction pour démarrer le diaporama automatique
function startAutoSlide() {
  clearInterval(autoSlideInterval); // S'assurer qu'il n'y a pas de double intervalle
  autoSlideInterval = setInterval(function() {
    plusSlides(1);
  }, 5000); // Changer d'image toutes les 5 secondes
}

// Appel de showSlides initialement pour ajuster l'affichage selon la taille de l'écran
showSlides(slideIndex);

// Ajouter un listener pour ajuster l'affichage lorsque la fenêtre est redimensionnée
window.addEventListener('resize', function() {
  showSlides(slideIndex);
});
