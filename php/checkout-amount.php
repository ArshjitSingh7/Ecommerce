<?php    
        if(isset($_SESSION['name'])) {
            include_once 'dbh.php';
            $userName=$_SESSION['name'];
            $sql="SELECT * FROM {$userName};";
            $result=mysqli_query($conn,$sql);
            $rowsNum=mysqli_num_rows($result);
            $amount=0;
            if($rowsNum>0) {
                while($row=mysqli_fetch_assoc($result)) {

                    $price=$row['price'];
                    $quantity=$row['quantity'];
                    $amount += $price*$quantity;
                }
            }
        }
        else {
            $amount=0;
        }
        