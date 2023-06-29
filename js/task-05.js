//знаходимо інпут та спан по айді
const inputElem = document.getElementById('name-input');
const outputElem = document.getElementById('name-output');
//вішаємо подію інпут
inputElem.addEventListener('input', returnOutput);
//колбек для прослуховувача події
function returnOutput() {
    let currentValue = inputElem.value;
    //якщо інпут порожній пишеться анонімус
    if (currentValue === '') {
        outputElem.textContent = 'Anonymous';
    } else outputElem.textContent = currentValue;
}