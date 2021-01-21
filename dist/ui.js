class UI {
    constructor() {
        this.menuItem = document.querySelector('#homepage .menu');
        this.hatsPreview = document.querySelector('.collection-preview .preview-hats');
        this.jacketsPreview = document.querySelector('.collection-preview .preview-jackets');
        this.mensPreview = document.querySelector('.collection-preview .preview-mens');
        this.womensPreview = document.querySelector('.collection-preview .preview-womens');
        this.sneakersPreview = document.querySelector('.collection-preview .preview-sneakers');
        this.hatsCollection = document.querySelector('.collection-preview .collection-hats');
        this.jacketsCollection = document.querySelector('.collection-preview .collection-jackets');
        this.mensCollection = document.querySelector('.collection-preview .collection-mens');
        this.womensCollection = document.querySelector('.collection-preview .collection-womens');
        this.sneakersCollection = document.querySelector('.collection-preview .collection-sneakers');
        this.itemCount = document.querySelector('.cart-icon .item-count');
        this.checkoutContent = document.querySelector('.checkout-content');
        this.totalAmount = document.querySelector('.cart-total');
        this.cartItems = document.querySelector('.cart-items');
        this.cartShow = document.querySelector('.cart-dropdown');
        this.toggleSign = document.querySelector('.toggle-sign');
        this.dropdown = true;
    }


    showHomeData(data) {
        let output = '';
        data.forEach( item => {
            output+= `
            <div class="menu-item" onclick="location.href='${item.category}.html'">
               <div class="background-image" style="background-image : url(${item.imageUrl});">
                   <div class="content">
                      <h1 class="title">${item.title}</h1>
                      <span class="subtitle">Shop Now</span>
                   </div>   
               </div>
            </div>
            `
        })
        if(this.menuItem)
        this.menuItem.innerHTML = output;

    }
    showCategoryData(data) {
        const hats = data.hats.items; 
        const mens = data.mens.items;
        const womens = data.womens.items;
        const sneakers = data.sneakers.items;
        const jackets = data.jackets.items;
        let output = '';
        hats.forEach( item => {
            output += `
            <div class="collection-item">
                <div class="image" style="background-image : url(${item.imageUrl});"></div>
                <div class="collection-footer">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <button class="custom-button btn-grey cart-btn" id="${item.id}">Add To Cart</button>
            </div>
            `
        }) 
        if(this.hatsPreview)
        this.hatsPreview.innerHTML = output;
        output = '';
        mens.forEach( item => {
            output += `
            <div class="collection-item">
                <div class="image" style="background-image : url(${item.imageUrl});"></div>
                <div class="collection-footer">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <button class="custom-button btn-grey cart-btn" id="${item.id}">Add To Cart</button>
            </div>
            `
        }) 
        if(this.mensPreview)
        this.mensPreview.innerHTML = output;
        output = '';
        womens.forEach( item => {
            output += `
            <div class="collection-item">
                <div class="image" style="background-image : url(${item.imageUrl});"></div>
                <div class="collection-footer">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <button class="custom-button btn-grey cart-btn" id="${item.id}" >Add To Cart</button>
            </div>
            `
        }) 
        if(this.womensPreview)
        this.womensPreview.innerHTML = output;
        output = '';
        jackets.forEach( item => {
            output += `
            <div class="collection-item">
                <div class="image" style="background-image : url(${item.imageUrl});"></div>
                <div class="collection-footer">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <button class="custom-button btn-grey cart-btn" id="${item.id}">Add To Cart</button>
            </div>
            `
        }) 
        if(this.jacketsPreview)
        this.jacketsPreview.innerHTML = output;
        output = '';
        sneakers.forEach( item => {
            output += `
            <div class="collection-item">
                <div class="image" style="background-image : url(${item.imageUrl});"></div>
                <div class="collection-footer">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <button class="custom-button btn-grey cart-btn" id="${item.id}">Add To Cart</button>
            </div>
            `
        }) 
        if(this.sneakersPreview)
        this.sneakersPreview.innerHTML = output;
    }

    showShopData(data) {
        const hats = data.hats.items; 
        const mens = data.mens.items;
        const womens = data.womens.items;
        const sneakers = data.sneakers.items;
        const jackets = data.jackets.items;
        let output = '';
        hats.forEach( (item,index) => {
            output += `
            <div class="collection-item">
                <div class="image" style="background-image : url(${item.imageUrl});"></div>
                <div class="collection-footer">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <button class="custom-button btn-grey cart-btn" id="${item.id}">Add To Cart</button>
            </div>
            `
        }) 
        if(this.hatsCollection)
        this.hatsCollection.innerHTML = output;
        output = '';
        mens.forEach( (item,index) => {
            output += `
            <div class="collection-item">
                <div class="image" style="background-image : url(${item.imageUrl});"></div>
                <div class="collection-footer">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <button class="custom-button btn-grey cart-btn" id="${item.id}">Add To Cart</button>
            </div>
            `
        }) 
        if(this.mensCollection)
        this.mensCollection.innerHTML = output;
        output = '';
        womens.forEach( (item,index) => {
            output += `
            <div class="collection-item">
                <div class="image" style="background-image : url(${item.imageUrl});"></div>
                <div class="collection-footer">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <button class="custom-button btn-grey cart-btn" id="${item.id}">Add To Cart</button>
            </div>
            `
        }) 
        if(this.womensCollection)
        this.womensCollection.innerHTML = output;
        output = '';
        jackets.forEach( (item,index) => {
            output += `
            <div class="collection-item">
                <div class="image" style="background-image : url(${item.imageUrl});"></div>
                <div class="collection-footer">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <button class="custom-button btn-grey cart-btn" id="${item.id}">Add To Cart</button>
            </div>
            `
        }) 
        if(this.jacketsCollection)
        this.jacketsCollection.innerHTML = output;
        output = '';
        sneakers.forEach( (item,index) => {
            output += `
            <div class="collection-item">
                <div class="image" style="background-image : url(${item.imageUrl});"></div>
                <div class="collection-footer">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <button class="custom-button btn-grey cart-btn" id="${item.id}">Add To Cart</button>
            </div>
            `
        }) 
        if(this.sneakersCollection)
        this.sneakersCollection.innerHTML = output;
    }

    cartDropdown() {
        this.dropdown = !this.dropdown;
        if(this.dropdown) {
            this.cartShow.style.display = 'block';
        }
        else {
            this.cartShow.style.display = 'none';
        }
    }
    displayCartItems() {
        const cartData = data.localStorageGetItems();
        let output = '';
        if(cartData.length === 0 ) {
            output = `
            <h3 class="empty-cart">Your cart is empty...</h3>
            `
        }
        else {
            cartData.forEach( item => {
                output += `
                <div class="cart-item">
                     <img src="${item.imageUrl}" alt="pic" />
                     <div class="item-details">
                         <span class="name">${item.name}</span>
                         <span class="price">${item.quantity}-$${item.price}</span>
                     </div>
                </div>
                `
            });
        }
        this.cartItems.innerHTML = output;
    }
    displayCheckoutPage() {
        const cartData = data.localStorageGetItems();
        let output = '' ;
        cartData.forEach( item => {
            output += `
            <div class="checkout-item">
                 <div class="image-container">
                    <img src="${item.imageUrl}" alt="pic" />
                 </div> 
                 <span class="name">${item.name}</span>
                 <span class="quantity">
                    <div class="arrow decrease" onclick={decArrow(${item.id})}>&#10094;</div>
                    <span class="value">${item.quantity}</span>
                    <div class="arrow increase" onclick={incArrow(${item.id})}>&#10095;</div>
                 </span>
                 <span class="price">$${item.price}</span>
                 <div class="remove-button" onclick={removeButton(${item.id})}>&#10005;</div>
            </div>
            
            `
        })
        if(this.checkoutContent)
        this.checkoutContent.innerHTML = output;
    }

    addItemToCart(itemId) {
        console.log(toggleSign.innerText)
        if(toggleSign.innerText === 'SIGN IN') {
            alert('Please Sign in to add items in cart');
        }
        else{
            let item;
            data.getShopData()
            .then(shopData => {
                if(itemId >=1 && itemId <=9) {
                    item = shopData.hats.items.find( shopItem => shopItem.id == itemId);
                    data.addItemInCart(item);
                }
                else if(itemId >=10 && itemId <=17) {
                    item = shopData.sneakers.items.find( shopItem => shopItem.id == itemId);
                    data.addItemInCart(item);
                }
                else if(itemId >=18 && itemId <=22) {
                    item = shopData.jackets.items.find( shopItem => shopItem.id == itemId);
                    data.addItemInCart(item);
                }
                else if(itemId >=23 && itemId <=31) {
                    item = shopData.womens.items.find( shopItem => shopItem.id == itemId);
                    data.addItemInCart(item);
                }
                else {
                    item = shopData.mens.items.find( shopItem => shopItem.id == itemId);
                    data.addItemInCart(item);
                }
                this.displayCartItems();
                this.displayCheckoutPage();
                this.cartItemCount();
                this.cartTotal();
            })
        }
        
    }
    increaseItemInCart(id) {
        const items = data.localStorageGetItems();
        const updatedItems = items.map( item => item.id == id ? {...item,quantity : item.quantity+1}: item);
        data.localStorageSetItems(updatedItems);
        this.displayCartItems();
        this.displayCheckoutPage();
        this.cartItemCount();
        this.cartTotal();
    }
    decreaseItemInCart(id) {
        const items = data.localStorageGetItems();
        const item = items.find( cartItem => cartItem.id === id);
        if(item.quantity === 1) {
            alert('Value can\'t be less than 0');
        }
        else{
            const updatedItems = items.map( item => item.id == id ? {...item,quantity : item.quantity-1}: item);
            data.localStorageSetItems(updatedItems);
            this.displayCartItems();
            this.displayCheckoutPage();
            this.cartItemCount();
            this.cartTotal();
        }
        
    }
    deleteItemInCart(id) {
        const items = data.localStorageGetItems();
        const updatedItems = items.filter( item => item.id!==id);
        data.localStorageSetItems(updatedItems);
        this.displayCartItems();
        this.displayCheckoutPage();
        this.cartItemCount();
        this.cartTotal();
    }
    cartItemCount() {
        const items = data.localStorageGetItems();
        this.itemCount.innerText = items.reduce( (acc,item) => acc+item.quantity  ,0);
    }
    cartTotal() {
        const items = data.localStorageGetItems();
        const total = items.reduce( (acc,item) => acc+(item.quantity*item.price)  ,0);
        if(this.totalAmount)
        this.totalAmount.innerText = total;
    }
    
}