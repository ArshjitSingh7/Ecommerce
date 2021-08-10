const checkoutContent = document.querySelector('.checkout-content');
const totalAmount = document.querySelector('.cart-total');
document.addEventListener('DOMContentLoaded', (e) => {
    showCheckoutData();
})
function deleteItem(title) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/delete-data.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data ==="success") {
                  console.log("item deleted");
                  location.reload();
              }
              else {
                  console.log(data);
              }
          }
      }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("incoming_id="+title);
}
function showCheckoutData() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/checkout-data.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let output=xhr.response;
              checkoutContent.innerHTML = output;
            //   let newAmount=0;
              const btn = [...document.querySelectorAll('.checkout-item')];
                btn.forEach( item => {
                    // let price=item.children[3].textContent;
                    // let x=price.slice(1,price.length);
                    // newAmount +=x*item.children[2].textContent;
                    item.addEventListener('click',(e) => {
                        if(e.target.classList.contains('remove-button')) {
                            deleteItem(e.target.id);
                        }
                        e.preventDefault();
                    })
                });
                // totalAmount.innerHTML=newAmount;
          }
      }
    }
    xhr.send();
}
