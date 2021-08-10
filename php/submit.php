<?php
require('config.php');
include_once 'checkout-amount.php';
include_once 'dbh.php';
session_start();
if(isset($_POST['stripeToken'])){
	$userName=$_SESSION['name'];
	$sql="DELETE FROM {$userName};";
	mysqli_query($conn,$sql);
	header("location:../payment-success.php?payment=success");
}
?>
