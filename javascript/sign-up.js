const signUpButton=document.querySelector('.sign-up');
const form=document.querySelector('#sign-in .box form');
const showAlert=document.querySelector('.alert');
showAlert.style.display='none';
form.onsubmit = (e)=>{
    e.preventDefault();
}
signUpButton.onclick = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/sign-up.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "success"){
                showAlert.className='alert alert-success';
                showAlert.style.color='green';
                showAlert.style.display='block';
                showAlert.textContent="Sign up successfull! Log in to add items in cart";
              }else{
                showAlert.className='alert alert-danger';
                showAlert.style.color='red';  
                showAlert.style.display='block';
                showAlert.textContent=data;
              }
          }
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
