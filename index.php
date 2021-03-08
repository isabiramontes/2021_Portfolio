<?php

$msg = "Hey Debug Console";
echo $msg;

if (isset($_POST['submit'])){   /* if contact form is submit */
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $pronouns = $_POST['pronouns'];
    $email_address = $_POST['email_address'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $reciever_email = "inquiries@isabiramontes.me";
    $headers = "From: ".$email_address;
    $txt = "New Inquiry from" .$first_name $last_name "pronouns: " .$pronouns ".\n\n".$message;
    
    mail($reciever_email, $text, $headers); /* my email, the message, & whom it's from*/
    header("Location: $thankyou_page");
}
?>
