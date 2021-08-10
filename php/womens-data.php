<?php    
        include_once 'dbh.php';
        $sql="SELECT * FROM womens;";
        $result=mysqli_query($conn,$sql);
        $rowsNum=mysqli_num_rows($result);
        $output='';
        if($rowsNum>0) {
            while($row=mysqli_fetch_assoc($result)) {
                $output .= '
                <div class="collection-item">
                    <div class="image" style="background-image : url('.$row['imageUrl'].');"></div>
                    <div class="collection-footer">
                        <span class="name">'.$row['productName'].'</span>
                        <span class="price">$'.$row['price'].'</span>
                    </div>
                    <button class="custom-button btn-grey cart-btn" id="'.$row['productId'].'">Add To Cart</button>
                </div>
                ';
            }
        }
        echo $output;