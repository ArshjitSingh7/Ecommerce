class Data {

    async getHomeData() {
        const response = await fetch('products/homedata.json');
        const responseData = await response.json();
        return responseData;
    }

    async getShopData(){
        const response = await fetch('products/shop.json');
        const responseData = await response.json();
        return responseData;
    }

    addItemInCart(cartItem) {
        let cart = this.localStorageGetItems();
        const exists = cart.find(item => item.id === cartItem.id);
        if(exists) {
            cart = cart.map( item => item.id == cartItem.id ? {...item,quantity : item.quantity+1} : item )
        }
        else {
            cart = [...cart,{...cartItem,quantity : 1}];
        }
        this.localStorageSetItems(cart);
    }

    localStorageGetItems() {
        let cart = '';
        if(localStorage.getItem('cart') === null) {
            cart = [];
        }
        else {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        return cart;
    }

    localStorageSetItems(items) {
        localStorage.clear();
        localStorage.setItem('cart',JSON.stringify(items));
    }
}