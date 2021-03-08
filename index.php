<?php

$msg = "Hey Debug Console";
echo $msg;

if (isset($_POST['submit']))    {   /* if contact form is submit */
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $pronouns = $_POST['pronouns'];
    $email_address = $_POST['email_address'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "inquiries@isabiramontes.me";
    $headers = "From: ".$email_address;
    $txt = "New Inquiry from " .$first_name. ".\n\n".$message;
    
    mail($mailTo, $subject, $txt, $headers); /* my email, subject, the message, & whom it's from $txt = "New Inquiry from " .$first_name && $last_name "pronouns: " .$pronouns ".\n\n".$message; */
    header("Location: $thankyou_page");
}
?>
