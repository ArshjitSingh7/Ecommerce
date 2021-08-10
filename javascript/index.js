document.addEventListener('DOMContentLoaded', (e) => {
    showHomeData();
});
function showHomeData() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/home-data.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let output=xhr.response;
              const menuItem = document.querySelector('#homepage .menu');
              menuItem.innerHTML = output;
              const hatsBtn = document.querySelector('#homepage .menu .hats');
              hatsBtn.addEventListener('click',(e) => {
                  window.location.href='./hats.php';
              })
              const jacketsBtn = document.querySelector('#homepage .menu .jackets');
              jacketsBtn.addEventListener('click',(e) => {
                  window.location.href='./jackets.php';
              })
              const sneakersBtn = document.querySelector('#homepage .menu .sneakers');
              sneakersBtn.addEventListener('click',(e) => {
                  window.location.href='./sneakers.php';
              })
              const mensBtn = document.querySelector('#homepage .menu .mens');
              mensBtn.addEventListener('click',(e) => {
                  window.location.href='./mens.php';
              })
              const womensBtn = document.querySelector('#homepage .menu .womens');
              womensBtn.addEventListener('click',(e) => {
                  window.location.href='./womens.php';
              })
          }
      }
    }
    xhr.send();
    // let output = '';
    // if(HomeData) {
    //     HomeData.forEach( item => {
    //         output+= `
    //         <div class="menu-item" onclick="location.href='${item.category}.php'">
    //         <div class="background-image" style="background-image : url(${item.imageUrl});">
    //             <div class="content">
    //                 <h1 class="title">${item.title}</h1>
    //                 <span class="subtitle">Shop Now</span>
    //             </div>   
    //         </div>
    //         </div>
    //         `
    //     })
    //     if(menuItem)
        
    // }
    // else {
    //     console.log("hello");
    // }
    
    
}