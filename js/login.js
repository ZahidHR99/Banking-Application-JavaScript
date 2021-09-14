//Login Event
document.getElementById('login-submit').addEventListener('click', function(){
   const emailField = document.getElementById('user-email');
   const passwordField = document.getElementById('user-password');
   const userEmail  = emailField.value;
   const userPassword  = passwordField.value;

   if(userEmail == '' && userPassword == ''){
       alert('Empty Form');
   }else{
    if(userEmail == 'zahidhr99@gmail.com' && userPassword == '12345'){
        // console.log("Successfully login");
        window.location.href = 'banking.html';
    }else{
        alert('Invalid Email or Password');
    }
   }
});

