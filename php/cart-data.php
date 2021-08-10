<?php
    include_once 'dbh.php';
    session_start();
    if(isset($_SESSION['name'])) {
        $userName=$_SESSION['name'];
        $sql="SELECT * FROM {$userName};";
        $result=mysqli_query($conn,$sql);
        if($result) {
            $res=mysqli_num_rows($result);
            if($res>0) {
            $output='';
            while($row=mysqli_fetch_assoc($result)) {
                $title=$row['title'];
                $imageUrl=$row['imageUrl'];
                $price=$row['price'];
                $quantity=$row['quantity'];
                $output .='
                <div class="cart-item">
                        <img src="'.$imageUrl.'" alt="pic" />
                        <div class="item-details">
                            <span class="name">'.$title.'</span>
                            <span class="price">'.$quantity.'-$'.$price.'</span>
                        </div>
                    </div>
                ';
                }
                echo $output;
            }
            else {
                echo 0;
            }
        }
        else {
            echo 0;
        }
    }
    else {
        echo 0;
    }