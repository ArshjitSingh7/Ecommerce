<?php
    include_once 'php/header.php';
?>
    <section id="sign-in">
        <div class="box">
            <h1 class="box-heading"><i class="fas fa-tshirt"></i>Singh's Clothing</h1>
            <p class="alert" style="display : none;"></p>
            <form action="#" method="POST"  class="sign-in-form">
                <label>Email</label>
                <input type="email" name="email" />
                <label>Password</label>
                <input type="password" name="password" />
                <button type="submit" class="btn-dark sign-in" name="sign-in-submit">Log In</button>
                <p>Don't Have an account? <a href="signup.php">Sign Up</a></p>
            </form>
        </div>
    </section>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="javascript/sign-in.js"></script>
</body>
</html>