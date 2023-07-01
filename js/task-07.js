//ловлю інпут та спан
const inputElem = document.querySelector("input");
const spanElem = document.querySelector("span");
//добавляю слухача подій на подію інпута
inputElem.addEventListener("input", onChangeText);
//колбек для слухача подій
function onChangeText(event) {
    //розмір тексту спана = значенню текущього елемента
    spanElem.style.fontSize = `${event.currentTarget.value}px`;
}
onChangeText();