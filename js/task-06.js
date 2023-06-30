//спочатку ловлю інпут через дата-атрибут
const inputElem = document.querySelector('[data-length="6"]');
// console.log(inputElem);

//добавляю слухача подій на подію розфокусу
inputElem.addEventListener("blur", onCheckResult);
//колбек для слухача подій
function onCheckResult(event) {
    //знаходжу правильну довжину ввожу в інпут через датасет
    const corectInputLength = Number(inputElem.dataset.length);
    //якщо довжина значення текущого елемента така ж як в
    //дата-атрибуті, то добавляю клас валідний
    if (event.currentTarget.value.length === corectInputLength) {
        inputElem.classList.add("valid");
        inputElem.classList.remove("invalid");
    } else {
        //в іншому випадку добавляю не валідний клас
        inputElem.classList.add("invalid");
        inputElem.classList.remove("valid");
    }
}
