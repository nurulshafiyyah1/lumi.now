<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "nurulshafiyyah1@gmail.com"; 
    $subject = "New Message from Contact Us Form";
    
    $body = "You have received a new message from the contact form.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message\n";
    
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n"; 
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n"; 
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send. Please try again.";
    }
}
?>
