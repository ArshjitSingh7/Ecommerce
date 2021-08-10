const signUpButton=document.querySelector('.sign-in');
const form=document.querySelector('#sign-in .box form');
const showAlert=document.querySelector('.alert');
showAlert.style.display='none';
form.onsubmit = (e)=>{
    e.preventDefault();
}
signUpButton.onclick = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/sign-in.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "success"){
                location.href="./index.php";
              }else{
                showAlert.className='alert alert-danger';
                showAlert.style.display='block';
                showAlert.textContent=data;
              }
          }
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}