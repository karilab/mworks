<?php
$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '' ;
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '' ;
$msg = isset($_REQUEST['message']) ? $_REQUEST['message'] : '' ;

require_once 'lib/swift_required.php';

// Create the mail transport configuration
$transport = Swift_MailTransport::newInstance();
 
// Create the message
$message = Swift_Message::newInstance();
$message->setTo(array(
  "kay@kaylog.com" => "Your Name"
));
$message->setSubject("Request Information");
$message->setBody($msg);
$message->setFrom($email, $name);
 
// Send the email
$mailer = Swift_Mailer::newInstance($transport);
$mailer->send($message);

echo 'Form submited successfully.'

/*
// Create the mail transport configuration
$transporter = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
      ->setUsername('karina.arias@gmail.com')
      ->setPassword('M4st3rK4r1');
	  

// Create the message
$message = Swift_Message::newInstance();
$message->setTo(array(
  "karina.arias@gmail.com" => "karina"
));
$message->setSubject("This email is sent using Swift Mailer");
$message->setBody($msg);
$message->setFrom($email, $name);
 
// Send the email
$mailer = Swift_Mailer::newInstance($transporter);
$mailer->send($message);

echo 'Form submited successfully.'

*/


/*
// hotmail
// Create the mail transport configuration
$transporter = Swift_SmtpTransport::newInstance('smtp.live.com', 587, 'tls')
      ->setUsername('cualquiera2009@outlook.com')
      ->setPassword('Testtest1');
	  

// Create the message
$message = Swift_Message::newInstance();
$message->setTo(array(
  "cualquiera2009@outlook.com" => "karina"
));
$message->setSubject("This email is sent using Swift Mailer");
$message->setBody("You're our best client ever.");
$message->setFrom("account@yaoo.com", "Your bank");
 
// Send the email
$mailer = Swift_Mailer::newInstance($transporter);
$mailer->send($message);

echo 'Form submited successfully.'

*/

/*
// Create the mail transport configuration for your hosted email, you should get details from your web hosting provider, you are free to change these details 
$transporter = Swift_SmtpTransport::newInstance('mail.klementine.net', 587, 'tls')
      ->setUsername('hello@klementine.net')
      ->setPassword('TestTest11');

// Create the message
$message = Swift_Message::newInstance();
$message->setTo(array(
  "hello@klementine.net" => "hello"
));
$message->setSubject("Request Information");
$message->setBody($msg);
$message->setFrom($email, $name);
 
// Send the email
$mailer = Swift_Mailer::newInstance($transporter);
$mailer->send($message);

echo 'Form submited successfully.'
*/
?>