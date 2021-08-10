<?php
        include_once 'dbh.php';
        $email=mysqli_real_escape_string($conn,$_POST['email']);
        $password=mysqli_real_escape_string($conn,$_POST['password']);
        if(empty($email) || empty($password)) {
            echo "Please fill out all fields";
        }
        else if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email";
        }
        else {
            $sql="SELECT * FROM users WHERE email='$email';";
            $result=mysqli_query($conn,$sql);
            $res=mysqli_num_rows($result);
            if($res>0) {
                while($row=mysqli_fetch_assoc($result)) {
                    if(password_verify($password,$row['userPassword'])) {
                        $userName=$row['userName'];
                        session_start();
                        $_SESSION['name']=$userName;
                        echo "success";
                        
                    }
                    else {
                        echo "Wrong password";
                    }
                    
                }
                
            }
            else {
                echo "User don't exist";
            }
        }
        
        