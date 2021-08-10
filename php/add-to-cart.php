<?php 
include_once 'dbh.php';
session_start();
if(isset($_SESSION['name'])) {
    $userName=$_SESSION['name'];
    $id=$_POST['incoming_id'];
    $sql="SELECT * FROM producttable where productId={$id};";
    $result=mysqli_query($conn,$sql);
    $res=mysqli_num_rows($result);
    if($res>0) {  
      while($row=mysqli_fetch_assoc($result)) {
          $title=$row['name'];
          $imageUrl=$row['imageUrl'];
          $price=$row['price'];
          $sql2="SELECT quantity FROM {$userName} WHERE title='{$title}'; ";
          $result2=mysqli_query($conn,$sql2);
          if(mysqli_num_rows($result2)>0) {
            while($row2=mysqli_fetch_assoc($result2)) {
                $quantity=$row2['quantity']+1;
                $sql3="UPDATE {$userName} SET quantity={$quantity} WHERE title='{$title}';";
                $result3=mysqli_query($conn,$sql3);
                
            }
              
          }
          else {
            $sql1="INSERT INTO {$userName} (title,imageUrl,price,quantity) VALUES ('{$title}','{$imageUrl}',{$price},1);";
            $result1=mysqli_query($conn,$sql1);
          }
          echo "success";
        }
        
    }
}
else {
    echo "log in";
}
