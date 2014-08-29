<?php
header('Content-Type: application/json');
include("db_connection.php");
$data = array(); 
if($_POST['email_address']){
	
	if(filter_var($_POST['email_address'], FILTER_VALIDATE_EMAIL)) {
        $email_address = $_POST['email_address'];
		$date = date("Y-m-d H:i:s");		
		$email_address = mysql_real_escape_string($email_address);
		
		$checkExists = mysql_query("SELECT * FROM subscribers WHERE email='$email_address'",$con);
		
		if(mysql_num_rows($checkExists) > 0){
			$data = array("error"=>"Already Scubsribe.");
		}else{
			$insertSubscribers = "INSERT INTO subscribers (email,date) VALUES ('$email_address', '$date')";			
			if(mysql_query($insertSubscribers,$con)){
			$data = array("success"=>"Thank You For Subscribing.");
			}else{
				$data = array("error"=>"Something Went Wrong. Please Tray Again.");
			}
		}		
		mysql_close($con);
    }
    else {
        $data = array("error"=>"Check Your Email Address Again.");
    }	
}	
echo json_encode($data);

?>