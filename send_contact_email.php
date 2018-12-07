<?php
error_reporting(0);
$fname = $_GET['fname'];
$require_service = $_GET['require_service'];
$email = $_GET['email'];
$telephone = $_GET['telephone'];
$company = $_GET['company'];
$budget = $_GET['budget'];
$deadline = $_GET['deadline'];
$message = $_GET['message'];
//echo $_GET['require_service'];
$to = "hello@biglyft.com";

$subject = "New Project Inquiry";

$message = "BIGLYFT NETHERLANDS,<br><p>You have a new project enquiry:</p>
<p>Name: ".$fname."</p><p>Service: ".$require_service."</p><p>Email: ".$email."</p><p>Phone: ".$telephone."</p><p>Company: ".$company."</p><p>Budget: ".$budget."</p><p>Deadline: ".$deadline."</p><p>Message: ".$message."</p>";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <hello@biglyft.com>' . "\r\n";
// More headers


//$mail = mail($to,$subject,$message,$headers);
if (mail($to, $subject, $message, $headers))
{
	echo json_encode(array("msg"=>"Message sent successfully","status"=>"success"));
}
else
{
	echo json_encode(array("msg"=>"Message sending failed","status"=>"failed"));
}
/*if($mail===TRUE)
{
	echo "Bericht succesvol verzonden.";
}
else
{
	echo "Bericht verzenden is mislukt";
}*/
?>
