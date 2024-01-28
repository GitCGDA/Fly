<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the form data if accessed via POST method
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'your_email@example.com'; // Replace with your email
    $subject = 'Contact Form Submission';
    $message_body = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $message_body, $headers)) {
        echo "<p>Thank you for contacting us. We will get back to you shortly.</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
} else {
    // Display a message if accessed directly without POST data
    http_response_code(405); // Set response code to 405 Method Not Allowed
    header('Allow: POST'); // Specify allowed method in the response header
    echo "<p>This script should be accessed via a POST request.</p>";
}
?>