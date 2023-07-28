let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

buttonDecrement.addEventListener('click', onDecrementClick);
buttonIncrement.addEventListener('click', onIncrementClick);

function onDecrementClick(event){
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function onIncrementClick(event){
  counterValue += 1;
  valueRef.textContent = counterValue;
}