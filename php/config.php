<?php
require('stripe-php-master/init.php');

$publishableKey="pk_test_51I7a7sJbX4qMxjCdPDsPYHfvie8KIXbxhlVrWN1AM03rSEXIryhl6c63AzVakrY4pB5Mi8WK5XjmTtcmQEWJxOSG00ZijbSY4v";

$secretKey="sk_test_51I7a7sJbX4qMxjCdUqg86LErcNJLN8Qks6H3FVZUmRkqEkYdwboz67UwB2SNeII2qqHsshoRaqiXouoKIyCZnULX00GvvVizOT";

\Stripe\Stripe::setApiKey($secretKey);
?>