document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const alertOverlay = document.getElementById("alert-overlay");
  const alertMessage = document.getElementById("alert-message");
  const closeAlert = document.getElementById("close-alert");
  const dateHeureInput = document.getElementById("date-heure");

  // Fonction pour afficher l'alerte
  function showAlert(message, type) {
      alertMessage.textContent = message;
      alertOverlay.classList.remove("hidden"); // Afficher l'overlay

      // Appliquer des styles en fonction du type de message (success ou error)
      if (type === "success") {
          alertOverlay.querySelector("#alert-box").classList.add("success");
          alertOverlay.querySelector("#alert-box").classList.remove("error");
      } else {
          alertOverlay.querySelector("#alert-box").classList.add("error");
          alertOverlay.querySelector("#alert-box").classList.remove("success");
      }
  }

  // Fonction pour fermer l'alerte
  closeAlert.addEventListener("click", function () {
      alertOverlay.classList.add("hidden"); // Masquer l'overlay
  });

  // Gestionnaire de soumission du formulaire
  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Empêcher la soumission classique

      // Récupérer la date/heure saisie
      const dateHeureValue = dateHeureInput.value;
      const userDate = new Date(dateHeureValue);

      // Vérifier si la date est valide
      if (isNaN(userDate.getTime())) {
          showAlert("Veuillez entrer une date et une heure valides.", "error");
          return;
      }

      // Date actuelle
      const now = new Date();

      // Ajouter 48 heures à la date actuelle
      const nowPlus48h = new Date(now.getTime() + (48 * 60 * 60 * 1000)); // 48h en millisecondes

      // Comparaison des dates
      if (userDate <= nowPlus48h) {
          showAlert("Vous ne pouvez pas soumettre une demande de réservation inférieure à 48h.", "error");
          return; // Bloque la soumission du formulaire
      }

      // Si la validation est bonne, envoyer les données via Fetch
      const formData = new FormData(form);

      fetch("form_process.php", {
          method: "POST",
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          if (data.includes("Votre message a bien été envoyé.")) {
              showAlert("Votre message a été envoyé avec succès !", "success");
              form.reset(); // Réinitialiser le formulaire après un succès
          } else {
              showAlert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.", "error");
          }
      })
      .catch(error => {
          console.error("Erreur :", error);
          showAlert("Une erreur technique est survenue. Veuillez réessayer plus tard.", "error");
      });
  });
});
