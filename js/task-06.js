const inputValid = document.querySelector('#validation-input');
const dataLength = Number(inputValid.dataset.length);


inputValid.addEventListener('blur', onValidInput);

function onValidInput(){

   if(inputValid.value.trim().length === dataLength) { 
   inputValid.classList.add('valid')
    inputValid.classList.remove('invalid');

   }else{inputValid.classList.add('invalid')
         inputValid.classList.remove('valid');  
        }
    }
