const inputSizeControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');


inputSizeControl.addEventListener('input', onTextSize);

function onTextSize(){
    textSize.style.fontSize = inputSizeControl.value + 'px';
}