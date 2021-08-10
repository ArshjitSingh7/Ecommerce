<?php
include_once 'dbh.php';

$userName=mysqli_real_escape_string($conn,$_POST['username']);
$email=mysqli_real_escape_string($conn,$_POST['email']);
$password=mysqli_real_escape_string($conn,$_POST['password']);
$confirmPassword=mysqli_real_escape_string($conn,$_POST['confirm-password']);
if(empty($userName) || empty($email) || empty($password) || empty($confirmPassword)) {
    echo "Please fill out all fields";
}
else if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email";
}
else if($password!==$confirmPassword) {
    echo "Password don't match";
}
else if(strlen($password)<=8) {
    echo "Password length must be greater than 8";
}
else if(!ctype_alnum($userName) ) {
    echo "Username must be alphanumeric";
  }
else if(preg_match("/^[0-9]+$/",$userName)) {
    echo "Username must contain an alphabet";
}
else {
    $sql="SELECT * FROM users WHERE userName='{$userName}' OR email='{$email}';";
    $result=mysqli_query($conn,$sql);
    if(!mysqli_fetch_assoc($result)) {
        $newPassword=password_hash($password,PASSWORD_DEFAULT);
        $sql1="INSERT INTO users (userName,email,userPassword) VALUES ('$userName','$email','$newPassword');";
        mysqli_query($conn,$sql1);
        $sql2='CREATE TABLE '.$userName.' (
            title VARCHAR(50) NOT NULL,
            imageUrl VARCHAR(50) NOT NULL,
            price INT NOT NULL,
            quantity INT
        );';
        mysqli_query($conn,$sql2);
        echo "success";
    }
    else {
        echo "User already exist";
    }
}

