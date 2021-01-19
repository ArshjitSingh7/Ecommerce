const ui = new UI();
const data = new Data();
document.querySelector('.cart-icon').addEventListener('click', (e) => {
    ui.cartDropdown();
    e.preventDefault();
})

const incArrow = id => ui.increaseItemInCart(id);
const decArrow = id => ui.decreaseItemInCart(id);
const removeButton = id => ui.deleteItemInCart(id);




document.addEventListener('DOMContentLoaded', (e) => {
    ui.cartDropdown();
    data.getHomeData()
    .then(homeData => ui.showHomeData(homeData));
    data.getShopData()
    .then(shopData => {
         ui.showCategoryData(shopData);
         ui.showShopData(shopData);
         const btn = [...document.querySelectorAll('.collection-item')];
         btn.forEach( item => {
             item.addEventListener('click',(e) => {
                 if(e.target.classList.contains('cart-btn')) {
                     ui.addItemToCart(e.target.id);
                 }
                e.preventDefault();
             })
         });
    });
    ui.displayCartItems();
    ui.displayCheckoutPage();
    ui.cartItemCount();
    ui.cartTotal();
    e.preventDefault();
})