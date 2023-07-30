const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormLogin);

function onFormLogin(event){
  event.preventDefault();

   const {email,password} = event.currentTarget.elements;
   const objectInput = {
   email: email.value,
   password: password.value,}

   console.log(objectInput);

  if(email.value === '' || password.value === ''){
    return alert('Please fill in all fields');

     
}
    
  event.currentTarget.reset();
}
