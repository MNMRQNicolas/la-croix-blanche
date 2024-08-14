// ------------------------------ //
// --- Filtre liste des vins --- //
// ----------------------------- //
document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('input[name="wine-category"]');
  const wineSections = document.querySelectorAll('.wine');

  // Fonction pour filtrer les sections de vins
  function filterWines() {
      const selectedCategory = document.querySelector('input[name="wine-category"]:checked').value;

      wineSections.forEach(function (section) {
          if (section.classList.contains(selectedCategory)) {
              section.style.display = 'block'; // Affiche la section de vin sélectionnée
          } else {
              section.style.display = 'none'; // Cache les autres sections de vin
          }
      });
  }

  // Ajout d'un écouteur d'événement pour chaque bouton radio
  radioButtons.forEach(function (radio) {
      radio.addEventListener('change', filterWines);
  });

  // Appel initial pour afficher les vins rouges par défaut
  filterWines();
});
