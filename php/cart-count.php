<?php
    include_once 'dbh.php';
    session_start();
    if(isset($_SESSION['name'])) {
        $userName=$_SESSION['name'];
        $sql="SELECT * FROM {$userName};";
        $result=mysqli_query($conn,$sql);
        $res=mysqli_num_rows($result);
        echo $res;
    } 
    else {
        echo 0;
    }    