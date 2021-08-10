<?php    
        session_start();
        if(isset($_SESSION['name'])) {
            include_once 'dbh.php';
            $userName=$_SESSION['name'];
            $sql="SELECT * FROM {$userName};";
            $result=mysqli_query($conn,$sql);
            $rowsNum=mysqli_num_rows($result);
            $amount=0;
            $output='';
            if($rowsNum>0) {
                while($row=mysqli_fetch_assoc($result)) {
                    $title=$row['title'];
                    $imageUrl=$row['imageUrl'];
                    $price=$row['price'];
                    $quantity=$row['quantity'];
                    $amount += $price*$quantity;
                    $output .= '
                    <div class="checkout-item">
                        <div class="image-container">
                            <img src="'.$imageUrl.'" alt="pic" />
                        </div> 
                        <span class="name">'.$title.'</span>
                        <span class="quantity">
                            <span class="value">'.$quantity.'</span>
                        </span>
                        <span class="price">$'.$price.'</span>
                        <div class="remove-button" id="'.$title.'" >&#10005;</div>
                    </div>
                    ';
                }
            }
            echo $output;
        }
        