<?php
//Change these $host,$user,$pass,$db with your server details.
$host = "localhost"; 
$user = "root";
$pass = "";
$db = "comming_soon";
$con=mysql_connect($host, $user, $pass) or die("Unable to connect to MySQL");

mysql_select_db($db,$con) or die("Could not select examples");

// Check connection
if (!$con) {
  echo "Failed to connect to MySQL: " .mysql_error();
}
?>