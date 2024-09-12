// -------------------------------------- //
// --- Gestion du Menu et de La Carte --- //
// -------------------------------------- //
const sheetID = '1XvCwGZh5fMR9P4dHYrF54NlwLtJVfxM3VSPdVXWMsYU';
const apiKey = 'AIzaSyAU_VyyGJvkzn7jusb_5fHlaRvjRp3xaZ0';
const menuSheet = 'menu'; // Nom de la première feuille pour le menu


fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${menuSheet}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const menuData = data.values; // Données extraites de la feuille 'Menu'

    // Récupérer le prix unique
    const prixUniqueEntrees = menuData[0][1]; // Le prix est en B1
    const prixUniquePlats = menuData[0][3]; // Le prix est en B1
    const prixUniqueDesserts = menuData[0][5]; // Le prix est en B1

    // Insérer le prix dans l'élément HTML dédié
    document.getElementById('menu-prix-entrees').textContent = `${prixUniqueEntrees} €`;

    // Insérer les noms des plats dans la liste
    const ulEntrees = document.getElementById('menu-entrees');
    ulEntrees.innerHTML = ''; // Vider l'ancienne liste

    menuData.forEach((row, index) => {
      if (index > 0) { // Ignorer la première ligne (car c'est le prix unique)
        const li = document.createElement('li');
        li.textContent = row[0]; // Nom du plat
        ulEntrees.appendChild(li);
      }
    });
  })
  .catch(error => console.error('Erreur de récupération des données:', error));
