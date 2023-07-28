const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInput);

function onInput(event){
    inputRef.value !== ''?spanRef.textContent = inputRef.value:
    spanRef.textContent = 'Anonymous';
}
