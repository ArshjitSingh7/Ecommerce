<?php
    include_once 'php/header.php';
?>
<section id="contact">
    <section id="sign-in">
        <div class="box">
            <h1 class="box-heading"><i class="fas fa-tshirt"></i>Singh's Clothing</h1>
            <p class="alert" style="display : none;"></p>
            <form class="sign-in-form" method="POST">
                <label>Name</label>
                <input type="name" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Contact</label>
                <input type="number" name="contact" />
                <label>Message</label>
                <textarea class="message" name="message"></textarea>
                <button class="btn-dark btn-block contact-btn" type="submit">Submit</button>
            </form>
        </div>
</section>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="javascript/contact.js"></script>
</body>
</html>