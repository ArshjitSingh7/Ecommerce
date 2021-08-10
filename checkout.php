<?php
    include_once 'php/header.php';
    require 'php/checkout-amount.php';
    require 'php/config.php';
?>
    <div class="checkout-page">
        <div class="checkout-header">
            <h1>My Cart</h1>
        </div>   
        <span class="checkout-content"></span>
        <div class="total">TOTAL : $<span class="cart-total"><?php echo $amount ?></span></div>
        <form action="php/submit.php" method="POST">
        <script
            src="https://checkout.stripe.com/checkout.js" class="stripe-button"
            data-key="<?php echo $publishableKey?>"
            data-amount="<?php echo $amount*100 ?>"
            data-name="Singh Clothing"
            data-currency="usd"
            data-description="You are paying to Singh clothing"
        >
        </script>
    </div>
    
    <script src="javascript/checkout.js"></script>
</body>
</html>