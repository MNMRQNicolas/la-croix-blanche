// Chargement des contenus sur plusieurs pages navigation
function loadContent() {
  // Promesses pour charger la navigation et le footer
  const navigationPromise = fetch('nav.html').then(response => response.text());
  const footerPromise = fetch('footer.html').then(response => response.text());

  // Utilisation de Promise.all pour attendre les deux fetch
  Promise.all([navigationPromise, footerPromise])
      .then(([navigationData, footerData]) => {
          document.getElementById('navigation').innerHTML = navigationData;
          document.getElementById('footer').innerHTML = footerData;
      })
      .catch(error => console.error('Error loading content:', error));
}

document.addEventListener('DOMContentLoaded', loadContent);
