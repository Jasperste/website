<?php
	$emailTo = "info@jasperstein.nl";
	$fromServer = "info@jasperstein.nl";

	// Quick Contact Form 
	session_start();
    define('TIME_INTERVAL', 300);

    if(false&&isset($_SESSION['ip']) && (time() - $_SESSION['last_post']) < TIME_INTERVAL){
       	$json = array(
			'state' => "error",
			'message' => "To prevent spam there's a timelimit of 5 minutes between each mail."
		);
		die(json_encode($json));
   }

    $_SESSION['last_post'] = time();
    $ip = $_SERVER['REMOTE_ADDR'];
    $_SESSION['ip'] = $ip;

	function validate_mail($email)
	{
		if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
			list($username,$domain)=split('@',$email);
			if(checkdnsrr($domain,'MX'))
				return true;
		}
		return false;
	}

	// Get posted data into local variables
	$emailFrom = Trim(stripslashes($_POST['mail'])); 
	$userSubject = Trim(stripslashes($_POST['subject'])); 
	$name = Trim(stripslashes($_POST['name'])); 
	$message = Trim(stripslashes($_POST['message'])); 

	// Validation
	if($emailFrom == "" || !validate_mail($emailFrom)){
		$json = array(
			'state' => "error",
			'message' => "Please enter a valid e-mail."
		);
		die(json_encode($json));
	}
	if($name == "" || $message == "" || $userSubject == ""){
		$json = array(
			'state' => "error",
			'message' => "Please enter all fields."
		);
		die(json_encode($json));
	}

	$subject = "New mail on JasperStein.nl: " . $userSubject;
	// Prepare email body text
	$body = "";
	$body .= "From: ";
	$body .= $emailFrom;
	$body .= "<br>";
	$body .= "Name: ";
	$body .= $name;
	$body .= "<br>";
	$body .= "User IP: ";
	$body .= $ip;
	$body .= "<br>";
	$body .= "Subject: ";
	$body .= $userSubject;
	$body .= "<br>";
	$body .= "Message: ";
	$body .= $message;
	$body .= "<br>";
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: ' . $fromServer . "\r\n";
	// Send E-Mail 
	$success = mail($emailTo, $subject, $body, $headers);

	// Redirect to Success page 
	if ($success){
		$json = array(
			'state' => "succes",
			'message' => "E-mail send!"
		);
		print json_encode($json);
	}else{
		$json = array(
			'state' => "error",
			'message' => "An unknown error occured, please try again later!"
		);
		print json_encode($json);
	}
?>