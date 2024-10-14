<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données avec protection contre les failles XSS
    $nom = htmlspecialchars(trim($_POST['nom']), ENT_QUOTES, 'UTF-8');
    $prenom = htmlspecialchars(trim($_POST['prenom']), ENT_QUOTES, 'UTF-8');
    $telephone = htmlspecialchars(trim($_POST['telephone']), ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars(trim($_POST['email']), ENT_QUOTES, 'UTF-8');
    $dateHeure = htmlspecialchars(trim($_POST['date-heure']), ENT_QUOTES, 'UTF-8');
    $commentaire = htmlspecialchars(trim($_POST['commentaire']), ENT_QUOTES, 'UTF-8');

    // Vérification des champs obligatoires
    if (empty($nom) || empty($prenom) || empty($telephone) || empty($email) || empty($dateHeure)) {
        echo "Tous les champs obligatoires doivent être remplis.";
        exit;
    }

    // Préparation du message email
    $to = "contact@lacroixblanchebordeaux.com";  // Adresse de destination
    $subject = "Demande de réservation pour " . $prenom . " " . $nom . " le " . $dateHeure;

    // Préparer le contenu du message avec UTF-8
    $message = "
    Nom : $nom\n
    Prénom : $prenom\n
    Téléphone : $telephone\n
    Email : $email\n
    Date et Heure : $dateHeure\n
    Commentaire : $commentaire
    ";

    // Ajouter les en-têtes avec encodage UTF-8
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "MIME-Version: 1.0\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n" .
               "Content-Transfer-Encoding: 8bit\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Envoi de l'email
    if (mail($to, $subject, $message, $headers)) {
        echo "Votre message a bien été envoyé. Nous reviendrons vers vous prochainement pour confirmer votre demande.";
    } else {
        echo "Une erreur est survenue lors de l'envoi de votre message.";
    }
}
?>
