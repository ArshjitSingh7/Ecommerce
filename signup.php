<?php
    include_once 'php/header.php';
?>
    <section id="sign-in">
        <div class="box">
            <h1 class="box-heading"><i class="fas fa-tshirt"></i>Singh's Clothing</h1>
            <p class="alert" style="display : none;"></p>
            <form  method="POST" class="sign-in-form">
                <label>Username</label>
                <input type="text" name="username">
                <label>Email</label>
                <input type="email" class="email-signup" name="email" />
                <label>Password</label>
                <input type="password" name="password" class="password-signup" />
                <label>Confirm Password</label>
                <input type="password" name="confirm-password" class="confirm-password-signup" />
                <button type="submit" class="btn-dark btn-block sign-up" name="sign-up-submit">Sign Up</button>  
            </form>
        </div>
    </section>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="javascript/sign-up.js"></script>
</body>
</html>