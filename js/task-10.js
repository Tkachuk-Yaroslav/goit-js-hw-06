function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//ловлю кнопки, інпут та дів куди вставлятиму квадрати
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const inputElem = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");
const minElem = Number(inputElem.min);
// console.log(minElem)
const maxElem = Number(inputElem.max);
// console.log(maxElem)
const stepElem = Number(inputElem.step);
// console.log(stepElem)

//функція яка створює і добавляє квадрати
function createBoxes(amount) {
  //створюю пустий DocumentFragment
  const divFragment = document.createDocumentFragment();
  //початкове значення довжини і ширини діва
  const startSizeDiv = 30;
  // console.log(inputElem.value < minElem)
  // console.log(inputElem.value > maxElem)
  if (inputElem.value < minElem || inputElem.value > maxElem) {
    alert("You have entered an invalid value! Try again!");
    return;
  }
  
  for (let i = 0; i < amount; i+=stepElem) {
    //оновлюю значення ширини і довжини
    const sizeDiv = startSizeDiv + i * 10;
    //створюю дів
    const divElement = document.createElement("div");
    //рандомний колір
    const foneColor = getRandomHexColor();
    //присвоюю ширину і довжину діва
    divElement.style.width = `${sizeDiv}px`;
    divElement.style.height = `${sizeDiv}px`;
    //присвоюю фон діва
    divElement.style.backgroundColor = `${foneColor}`;
    //додаю дів до DocumentFragment
    divFragment.appendChild(divElement); //--------
  }

  //додаю DocumentFragment в розмітку
  divBoxes.appendChild(divFragment);
}

//функція яка чистить екран
function destroyBoxes() {
  //чищу вміст діва в якому знаходяться створені діви
  divBoxes.innerHTML = '';
  //чищу значення інпута
  inputElem.value = '';
}

//ставлю слухача на кнопку
btnCreate.addEventListener('click', onClickCreateBtn);
//калбек
function onClickCreateBtn() {
  //змінна яка визначає скільки дівів буде створено
  const count = Number(inputElem.value);
  //виклик функції яка створює діви
  createBoxes(count);
}

//ставлю слухача на кнопку
btnDestroy.addEventListener("click", onClickDestroyBtn);
//калбек
function onClickDestroyBtn() {
  //виклик функції яка чистить екран
  destroyBoxes();
}