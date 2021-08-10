<?php

   $dbServerName="sql213.epizy.com";
   $dbUserName="epiz_28357947";
   $dbPassword="TjiyvumZpEcOr";
   $dbName="epiz_28357947_ecommerce";
   $conn=mysqli_connect($dbServerName,$dbUserName,$dbPassword,$dbName);
   if(!$conn) {
       die("connection Failed!".mysqli_connect_error());
   } 