function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxesCreate = document.querySelector('#boxes');

console.log(inputNumber)

buttonCreate.addEventListener('click', createBoxes(amount));
buttonDestroy.addEventListener('click', destroyBoxes());

function createBoxes(amount){
 ;}



