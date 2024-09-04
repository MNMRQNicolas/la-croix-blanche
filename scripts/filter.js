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

// ------------------- //
// --- Filtre Menu --- //
// ------------------- //
document.addEventListener("DOMContentLoaded", function() {
  const radioButtons = document.querySelectorAll('input[name="menu-filter"]');
  const cards = document.querySelectorAll('.card-menu');

  function updateVisibleCard() {
    cards.forEach(card => {
      card.classList.remove('active');
    });

    const selectedValue = document.querySelector('input[name="menu-filter"]:checked').value;
    document.getElementById(selectedValue).classList.add('active');
  }

  radioButtons.forEach(radio => {
    radio.addEventListener('change', updateVisibleCard);
  });

  // Initialiser la carte "Entrées" comme visible sur mobile
  document.getElementById('menu-entrees').classList.add('active');
});
