document.addEventListener('DOMContentLoaded', (e) => {
    showHatsData();
});

const mensPreview = document.querySelector('.collection-preview .preview-mens');
function showHatsData() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/mens-data.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let output=xhr.response;
              mensPreview.innerHTML = output;
              const btn = [...document.querySelectorAll('.collection-item')];
                btn.forEach( item => {
                    item.addEventListener('click',(e) => {
                        if(e.target.classList.contains('cart-btn')) {
                            addToCart(e.target.id);
                        }
                        e.preventDefault();
                    })
                });
          }
      }
    }
    xhr.send();
}

function addToCart(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/add-to-cart.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data ==="success") {
                  console.log("added");
                  updateCart();
              }
              else {
                alert("Log in to add items in cart");
              }
          }
      }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("incoming_id="+id);
}
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