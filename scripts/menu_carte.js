// -------------------------------------- //
// --- Gestion du Menu et de La Carte --- //
// -------------------------------------- //
function loadMenu(menuData) {
  // Récupérer les données de la feuille « Menu »
  let entrees = [], plats = [], desserts = [];
  let prixEntrees = "", prixPlats = "", prixDesserts = "";

  menuData.forEach((row, i) => {
    if (row[0] && i > 0) entrees.push(row[0]); // Colonne des entrées
    if (row[1]) prixEntrees = row[1]; // Prix des entrées
    if (row[2] && i > 0) plats.push(row[2]);   // Colonne des plats
    if (row[3]) prixPlats = row[3];    // Prix des plats
    if (row[4] && i > 0) desserts.push(row[4]); // Colonne des desserts
    if (row[5]) prixDesserts = row[5]; // Prix des desserts
  });

  // Injecter les entrées
  document.querySelector('#menu-entrees .content-card ul').innerHTML = entrees.map(item => `<li>${item}</li>`).join('');
  document.querySelector('#menu-entrees .head-card .prix').textContent = prixEntrees + " €";

  // Injecter les plats
  document.querySelector('#menu-plats .content-card ul').innerHTML = plats.map(item => `<li>${item}</li>`).join('');
  document.querySelector('#menu-plats .head-card .prix').textContent = prixPlats + " €";

  // Injecter les desserts
  document.querySelector('#menu-desserts .content-card ul').innerHTML = desserts.map(item => `<li>${item}</li>`).join('');
  document.querySelector('#menu-desserts .head-card .prix').textContent = prixDesserts + " €";
}

// Fonction pour charger les données de la feuille « Carte »
function loadCarte(carteData) {
  let entrees = [], plats = [], desserts = [];

  carteData.forEach((row, i) => {
    if (row[0] && i > 0) entrees.push({ name: row[0], price: row[1] }); // Nom et prix des entrées
    if (row[2] && i > 0) plats.push({ name: row[2], price: row[3] });   // Nom et prix des plats
    if (row[4] && i > 0) desserts.push({ name: row[4], price: row[5] }); // Nom et prix des desserts
  });

  // Injecter les entrées
  document.querySelector('#carte-entrees .grid-2 ul.list-carte').innerHTML = entrees.map(item => `<li>${item.name}</li>`).join('');
  document.querySelector('#carte-entrees .grid-2 ul.list-prix').innerHTML = entrees.map(item => `<li>${item.price} €</li>`).join('');

  // Injecter les plats
  document.querySelector('#carte-viandes-poissons .grid-2 ul.list-carte').innerHTML = plats.map(item => `<li>${item.name}</li>`).join('');
  document.querySelector('#carte-viandes-poissons .grid-2 ul.list-prix').innerHTML = plats.map(item => `<li>${item.price} €</li>`).join('');

  // Injecter les desserts
  document.querySelector('#carte-desserts .grid-2 ul.list-carte').innerHTML = desserts.map(item => `<li>${item.name}</li>`).join('');
  document.querySelector('#carte-desserts .grid-2 ul.list-prix').innerHTML = desserts.map(item => `<li>${item.price} €</li>`).join('');
}

function loadDataFromGoogleSheet() {
  const spreadsheetId = '1XvCwGZh5fMR9P4dHYrF54NlwLtJVfxM3VSPdVXWMsYU';
  const apiKey = 'AIzaSyAU_VyyGJvkzn7jusb_5fHlaRvjRp3xaZ0';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?ranges=menu&ranges=carte&key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const menuData = data.valueRanges[0].values;  // Feuille 1 (Menu)
      const carteData = data.valueRanges[1].values; // Feuille 2 (Carte)

      loadMenu(menuData);    // Appel de la fonction pour charger le « Menu »
      loadCarte(carteData);  // Appel de la fonction pour charger la « Carte »
    })
    .catch(error => console.error('Erreur de chargement des données:', error));
}

// Appeler la fonction pour charger les données au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  loadDataFromGoogleSheet();
});
