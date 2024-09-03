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
          addBackgroundColorScroll();
      })
      .catch(error => console.error('Erreur de chargement du contenu :', error));
}

document.addEventListener('DOMContentLoaded', loadContent);

// ----------- //
// --- Nav --- //
// ----------- //
function addBackgroundColorScroll() {
  window.onscroll = function() {
      const navAddBgColor = document.getElementById('navScroll');

      if (navAddBgColor) {
          const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;

          if (document.documentElement.scrollTop > 0) {
              navAddBgColor.classList.remove('remove-bgcolor-scroll');
              navAddBgColor.classList.add('add-bgcolor-scroll');
          } else {
              navAddBgColor.classList.remove('add-bgcolor-scroll');
              navAddBgColor.classList.add('remove-bgcolor-scroll');
          }
      }
  };
}
// const nav = document.getElementById('navScroll')
// function onWindowScroll(event) {
//   if (window.scrollY < 20) {
//     nav.classList.remove('scrolled')
//   } else {
//     nav.classList.add('scrolled')
//   }
// }
// window.addEventListener('scroll', onWindowScroll)
