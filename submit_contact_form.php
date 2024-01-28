<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'cgda@hotmail.co.uk'; // Replace with your email
    $subject = 'Contact Form Submission';
    $message_body = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $message_body, $headers)) {
        echo "<p>Thank you for contacting us. We will get back to you shortly.</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
} else {
    // Handle the case if the form is accessed directly without submission
    echo "<p>This page cannot be accessed directly.</p>";
}
?>