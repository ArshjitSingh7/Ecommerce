<?php
include_once 'dbh.php';

$name=mysqli_real_escape_string($conn,$_POST['name']);
$email=mysqli_real_escape_string($conn,$_POST['email']);
$subject=mysqli_real_escape_string($conn,$_POST['subject']);
$contact=mysqli_real_escape_string($conn,$_POST['contact']);
$message=mysqli_real_escape_string($conn,$_POST['message']);
if(empty($name) || empty($email) || empty($subject) || empty($contact) || empty($message)) {
    echo "Please fill out all fields";
}
else if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email";
}
else {
    $sql1="INSERT INTO contact VALUES ('$name','$email','$subject','$contact','$message');";
    $result=mysqli_query($conn,$sql1);
    if($result) {
        echo "success"; 
    }
    else {
        echo "error occured";
    }   
}
    


