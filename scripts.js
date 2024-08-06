// Charger la navigation
function loadContent () {
  fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navigation').innerHTML = data;
    })
    .catch(error => console.error('Erreur chargement du footer :', error));
}
document.addEventListener('DOMContentLoaded', loadContent);
