// ------------------------------------------------------------- //
// --- Formulaire de la page Contact - Validation des champs --- //
// ------------------------------------------------------------- //
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (e) {
      let form = e.target;
      let missingFields = [];

      // Vérification des champs obligatoires
      if (!form.nom.value) missingFields.push("Nom");
      if (!form.prenom.value) missingFields.push("Prénom");
      if (!form.telephone.value) missingFields.push("Téléphone");
      if (!form.email.value) missingFields.push("Adresse e-mail");
      if (!form['date-heure'].value) missingFields.push("Date et Heure");

      // Si des champs sont manquants
      if (missingFields.length > 0) {
          e.preventDefault();
          alert("Les champs suivants sont obligatoires : " + missingFields.join(", "));
      }
  });
});
