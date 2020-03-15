


<?php
$connection = mysql_connect("localhost", "root", ""); // Establishing Connection with Server..
$db = mysql_select_db("mydba", $connection); // Selecting Database

//Fetching Values from URL

$email2=$_POST['email1'];

//Insert query
$query = mysql_query("insert into form_element(email) values ('$email2')");
echo "Form Submitted Succesfully";
mysql_close($connection); // Connection Closed
?>
