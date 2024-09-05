// ----------------------- //
// --- Filtre La Carte --- //
// ----------------------- //
document.addEventListener('DOMContentLoaded', function () {
  // Fonction générique pour filtrer les sections en fonction des boutons radio
  function filterContent(radioGroupName, contentClass) {
    const radioButtons = document.querySelectorAll(`input[name="${radioGroupName}"]`);
    const contentSections = document.querySelectorAll(`.${contentClass}`);

    function applyFilter() {
      const selectedCategory = document.querySelector(`input[name="${radioGroupName}"]:checked`).value;

      contentSections.forEach(function (section) {
        section.classList.remove('active');
        if (section.classList.contains(selectedCategory)) {
          section.classList.add('active'); // Active uniquement la section sélectionnée
        }
      });
    }

    // Ajout d'écouteurs d'événements pour chaque bouton radio
    radioButtons.forEach(function (radio) {
      radio.addEventListener('change', applyFilter);
    });

    // Appel initial pour afficher la première catégorie par défaut
    applyFilter();
  }

  // Filtrer les "Menu" (Entrées, Plats, Desserts)
  filterContent('menu-category', 'card-menu');

  // Filtrer la "Carte" (Entrées, Viandes et Poissons, Desserts)
  filterContent('carte-category', 'card-carte');

  // Filtrer les "Vins" (Rouges, Blancs, Rosés, Bulles)
  filterContent('vins-category', 'card-vins');
});
