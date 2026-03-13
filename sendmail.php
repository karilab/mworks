<?php
$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '' ;
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '' ;
$message = isset($_REQUEST['message']) ? $_REQUEST['message'] : '' ;

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:'.$name.' '.$email;

// Replace mail@website.com with your email
mail( "mail@website.com", "Request Information",$message, $headers );
print "<strong>Form submitted successfully.</strong>";
?>