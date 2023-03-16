// step-1 add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
//    step-2 get the email address inside email input field 
//  always remember to use.value to get text from an input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
//   step-3 get password
//   1-set id on the  html element 
//   2-get the element
//   3- get the value from the element
 const passwordField = document.getElementById('user-password');
 const password = passwordField.value;
 console.log(email,password);

})
   