document.addEventListener('DOMContentLoaded', (e) => {
    updateCart();
});
var hidden=true;
const cartItems=document.querySelector('.cart-items');
// setInterval(function()
// {
//     var xhr = new XMLHttpRequest();
//         xhr.open("POST", "./php/cart-data.php", true);
//         xhr.onload = ()=>{
//             if(xhr.readyState === XMLHttpRequest.DONE){
//                 if(xhr.status === 200){
//                     let output=xhr.response;
//                     const menuItem = document.querySelector('#homepage .menu');
//                     if(output == 0) {
//                         cartItems.innerHTML=`
//                         <h3 class="empty-cart">Your cart is empty...</h3>
//                         `;
//                     }
//                     else {
//                         cartItems.innerHTML=output;
//                     }
//                 }
//             }
//         }
//         xhr.send();
// }, 0.5);
document.querySelector('.cart-icon').addEventListener('click', (e) => {
    if(hidden == true) {
        document.querySelector('.cart-dropdown').style.display='block';
        hidden=false;
        }
    else {
        document.querySelector('.cart-dropdown').style.display='none';
        hidden=true;
    }
    e.preventDefault();
})
function updateCart() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/cart-data.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let output=xhr.response;
                const menuItem = document.querySelector('#homepage .menu');
                if(output == 0) {
                    cartItems.innerHTML=`
                    <h3 class="empty-cart">Your cart is empty...</h3>
                    `;
                }
                else {
                    cartItems.innerHTML=output;
                }
            }
        }
    }
    xhr.send();
}