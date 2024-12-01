<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address
    $to = "alihasanofficial001@gmail.com";

    // Subject line
    $mailSubject = "New Contact Form Submission: " . $subject;

    // Email body
    $body = "You have received a new message from your contact form:\n\n" .
            "Name: $name\n" .
            "Email: $email\n\n" .
            "Message:\n$message";

    // Email headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $mailSubject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
} else {
    echo "Invalid request.";
}
?>
