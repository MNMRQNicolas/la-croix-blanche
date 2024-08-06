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
