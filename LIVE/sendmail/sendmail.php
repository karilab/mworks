<?php
$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '' ;
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '' ;
$msg = isset($_REQUEST['message']) ? $_REQUEST['message'] : '' ;

require_once 'lib/swift_required.php';

// Create the mail transport configuration GMAIL 
//$transporter = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
//      ->setUsername('youremail@gmail.com')
//      ->setPassword('gmail password');
	  

	  
// Create the mail transport configuration uncomment to use HOTMAIL
//$transporter = Swift_SmtpTransport::newInstance('smtp.live.com', 587, 'tls')
//     ->setUsername('youremail@hotmail.com')
//      ->setPassword('hotmail password'); 



// Create the mail transport configuration for your hosted email, you should get details from your web hosting provider, you are free to change these details 
$transporter = Swift_SmtpTransport::newInstance('mail.something.net', 587, 'tls')
      ->setUsername('youremail@something.net')
      ->setPassword('your password');



// Create the message
$message = Swift_Message::newInstance();
$message->setTo(array(
  "youremail@something.net" => "Your name"
));
$message->setSubject("Request Information");
$message->setBody($msg);
$message->setFrom($email, $name);
 
// Send the email
$mailer = Swift_Mailer::newInstance($transporter);
$mailer->send($message);

echo 'Form submited successfully.'


?>