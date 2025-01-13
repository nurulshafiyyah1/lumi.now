<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Set the email details
    $to = "nurulshafiyyah1@gmail.com"; // Replace with your email
    $subject = "New Message from Contact Us Form";
    
    // Prepare the email body
    $body = "You have received a new message from the contact form.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message\n";
    
    // Set the headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n"; // Set the reply-to address as the sender's email
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n"; // Set character encoding

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send. Please try again.";
    }
}
?>
