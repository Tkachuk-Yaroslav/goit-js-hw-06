function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


//ловлю боді елемент, кнопку і спан
const bodyElem = document.querySelector("body");
const btnElem = document.querySelector(".change-color");
const colorTextElem = document.querySelector(".color");
//ставлю слухача на кнопку
btnElem.addEventListener("click", onButtonCkick);
//колбек для слухача
function onButtonCkick() {
  //в змінну присвоюю значення яке згенериться в getRandomHexColor
  const bodyBackgroundColor = getRandomHexColor();
  bodyElem.style.backgroundColor = `${bodyBackgroundColor}`;
  //вивожу колір в RGB форматі або в HEX форматі(закоментовано)
  colorTextElem.textContent = bodyElem.style.backgroundColor;
  // colorTextElem.textContent = getRandomHexColor();
}


