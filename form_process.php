<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST['nom']));
    $prenom = htmlspecialchars(trim($_POST['prenom']));
    $telephone = htmlspecialchars(trim($_POST['telephone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $dateHeure = htmlspecialchars(trim($_POST['date-heure']));
    $commentaire = htmlspecialchars(trim($_POST['commentaire']));

    // Vérification des champs obligatoires
    if (empty($nom) || empty($prenom) || empty($telephone) || empty($email) || empty($dateHeure)) {
        echo "Tous les champs obligatoires doivent être remplis.";
        exit;
    }

    // Préparer l'email
    $to = "contact@lacroixblanchebordeaux.com";  // Adresse de destination
    $subject = "Nouvelle demande de contact de " . $prenom . " " . $nom;
    $message = "
    Nom : $nom\n
    Prénom : $prenom\n
    Téléphone : $telephone\n
    Email : $email\n
    Date et Heure : $dateHeure\n
    Commentaire : $commentaire
    ";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Envoi de l'email
    if (mail($to, $subject, $message, $headers)) {
        echo "Votre message a bien été envoyé.";
    } else {
        echo "Une erreur est survenue lors de l'envoi de votre message.";
    }
}
?>
