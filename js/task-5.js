function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');

button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}