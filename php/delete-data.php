<?php 
    include_once 'dbh.php';
    session_start();
    $userName=$_SESSION['name'];
    $id=$_POST['incoming_id'];
    $sql="DELETE FROM {$userName} WHERE title='{$id}'";
    $result=mysqli_query($conn,$sql);
    if($result) {
        echo "success";
    }
    else {
        echo "error";
    }
        