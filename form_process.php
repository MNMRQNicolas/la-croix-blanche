<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération et sécurisation des données
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

    // Destinataire
    // $to = "contact@lacroixblanchebordeaux.com";
    $to = "nicolas.monmerque@gmail.com";

    // Sujet de l'email
    $subject = "Nouvelle demande de " . $prenom . " " . $nom;

    // Message
    $message = "
    Nom : $nom\n
    Prénom : $prenom\n
    Téléphone : $telephone\n
    Email : $email\n
    Date et Heure : $dateHeure\n
    Commentaire : $commentaire
    ";

    // En-têtes
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
