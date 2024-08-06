// --------------------------------------------------- //
// --- Chargement des contenus sur plusieurs pages --- //
// --------------------------------------------------- //
function loadContent() {
  // Promesses pour charger navigation, infos pratiques, réservation et footer
  const navigationPromise = fetch('nav.html').then(response => response.text());
  const infosPromise = fetch('infos_pratiques.html').then(response => response.text());
  const reservationPromise = fetch('reservation.html').then(response => response.text());
  const footerPromise = fetch('footer.html').then(response => response.text());

  // Utilisation de Promise.all pour attendre les fetch
  Promise.all([navigationPromise, infosPromise, reservationPromise, footerPromise])
      .then(([navigationData, infosData, reservationData, footerData]) => {

          const navigationBloc = document.getElementById('navigation');
          if (navigationBloc) {
              navigationBloc.innerHTML = navigationData;
          }

          const infosBloc = document.getElementById('infos');
          if (infosBloc) {
              infosBloc.innerHTML = infosData;
          }

          const reservationBloc = document.getElementById('reservation');
          if (reservationBloc) {
              reservationBloc.innerHTML = reservationData;
          }

          const footerBloc = document.getElementById('footer');
          if (footerBloc) {
              footerBloc.innerHTML = footerData;
          }
      })
      .catch(error => console.error('Erreur de chargement du contenu :', error));
}

document.addEventListener('DOMContentLoaded', loadContent);

// ----------------- //
// --- Swiper JS --- //
// ----------------- //
const swiper = new Swiper('.slideshow-container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      SlidesPerView: 1
    },
    620: {
      SlidesPerView: 2
    },
    1024: {
      SlidesPerView: 3
    }
  }

});
