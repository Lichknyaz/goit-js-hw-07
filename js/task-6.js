function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmount = document.querySelector("#controls input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector('#boxes');

boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';


buttonCreate.addEventListener("click", () => {
  const amount = parseInt(inputAmount.value);
  if (amount >= 1 && amount <= 100) {
  createBoxes(amount);
  console.log(amount);
  }
})
buttonDestroy.addEventListener("click", () => {
  boxes.innerHTML = '';
  inputAmount.value = "";
})


function createBoxes(amount) {
  boxes.innerHTML = '';
  let addedBoxes = "";
  for (let i = 1; i <= amount; i++) {
    addedBoxes += `<div class='box' style="width: ${30+10*i}px; height: ${30+10*i}px; background-color: ${getRandomHexColor()}; margin: 10px"> </div> `;
  }
  boxes.insertAdjacentHTML("beforeend", addedBoxes);
  inputAmount.value = "";
}