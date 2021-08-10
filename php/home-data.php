<?php    
        include_once 'dbh.php';
        $sql="SELECT * FROM homedata;";
        $result=mysqli_query($conn,$sql);
        $rowsNum=mysqli_num_rows($result);
        $output='';
        if($rowsNum>0) {
            while($row=mysqli_fetch_assoc($result)) {
                $output .= '
                <div class="menu-item '.$row['category'].'">
                <div class="background-image" style="background-image : url('.$row['imageUrl'].');">
                    <div class="content">
                        <h1 class="title">'.$row['title'].'</h1>
                        <span class="subtitle">Shop Now</span>
                    </div>   
                </div>
                </div>
                ';
            }
        }
        echo $output;