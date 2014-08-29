<?php
header('Content-Type: application/json');
include("db_connection.php");
$data = array(); 
if($_POST['contact_us_email']){
	
	if(filter_var($_POST['contact_us_email'], FILTER_VALIDATE_EMAIL)) {
        $email_address = $_POST['contact_us_email'];
		$msg = $_POST['contact_msg'];
		$date = date("Y-m-d H:i:s");		
		$email_address = mysql_real_escape_string($email_address);
		
			$insertContacts = "INSERT INTO contact_us (email,msg,date) VALUES ('$email_address','$msg','$date')";			
			if(mysql_query($insertContacts,$con)){
			
				$to      = 'chamath2007@gmail.com'; // Change This Email Address
				$subject = 'Bull Comming Soon';
				$message = $msg;
				$headers = 'From:'.$email_address.'' . "\r\n" .
					'Reply-To: your@email.here' . "\r\n" .
					'Content-type: text/html; charset=iso-8859-1'. "\r\n".
					'X-Mailer: PHP/' . phpversion();
				$data = array(); 
				if(mail($to, $subject, $message, $headers)) {
					$data = array("success"=>'Email sent successfully!');
				} else {
					$data = array("error"=>'Email sent successfully!');
				}
				$data = array("success"=>"Thank You For Contacting Us.");
			}else{
				$data = array("error"=>"Something Went Wrong. Please Tray Again.");
			}
				
		mysql_close($con);
    }
    else {
        $data = array("error"=>"Check Your Email Address Again.");
    }	
}	
echo json_encode($data);

?>