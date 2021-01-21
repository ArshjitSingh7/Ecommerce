var firebaseConfig = {
    apiKey: "AIzaSyD9QXuoHr9UUnFoi1izXQmzwAwi_puHPJY",
    authDomain: "ecommerce-53e07.firebaseapp.com",
    projectId: "ecommerce-53e07"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();



const googleSignIn = document.querySelector('.sign-in-up-google');
const emailSignUp = document.querySelector('.sign-up');
const toggleSign = document.querySelector('.toggle-sign');

toggleSign.addEventListener('click' , (e) => {
    if(toggleSign.innerText === 'SIGN OUT') {
        auth.signOut()
        .then(() => console.log('user logged out'));
    }
    else{
        window.location.assign('./signin.html');
    }

    e.preventDefault();
})
if(googleSignIn) {
    googleSignIn.addEventListener('click',(e) => {

        var provider = new  firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then( () => {
            window.location.assign('./index.html');
        } );
    
        e.preventDefault();
    })
}
if(emailSignUp) {
    emailSignUp.addEventListener('click' ,(e) => {

        const email = document.querySelector('.email-signup').value;
        const password = document.querySelector('.password-signup').value;
        const confirmPassword = document.querySelector('.confirm-password-signup').value;
        if(password !== confirmPassword) {
            alert('password does not match');
        }
        else {
            auth.createUserWithEmailAndPassword(email,password)
            .then(user =>  {
                window.location.assign('./index.html');
                document.querySelector('.toggle-sign').innerText = 'SIGN OUT';
            });
        }
        e.preventDefault();
    })
}

auth.onAuthStateChanged( user => {

    if(user) {
        document.querySelector('.toggle-sign').innerText = 'SIGN OUT';
    }
    else {
        document.querySelector('.toggle-sign').innerText = 'SIGN IN'
    }
    ui.displayCartItems();
    ui.displayCheckoutPage();
    ui.cartItemCount();
    ui.cartTotal();
})