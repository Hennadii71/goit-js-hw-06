function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}

const buttonChangeColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const meanColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', getColorChange);

function getColorChange(){
  bodyColor.style.backgroundColor = getRandomHexColor();
  meanColor.textContent = getRandomHexColor();
}
