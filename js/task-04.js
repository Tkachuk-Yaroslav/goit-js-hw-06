//присвоюємо початкове значення лічильнику
let counterValue = 0;
//знаходимо спан
let currentValueElem = document.querySelector('span');
//знаходимо першу кнопку
const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);
//знаходимо другу кнопку
const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);

//ставимо слухача події на клік -1
btnDecrement.addEventListener('click', downCounter);
//колбек функція 
function downCounter() {
    counterValue -= 1;
    currentValueElem.textContent = counterValue;
}

//ставимо слухача події на клік +1
btnIncrement.addEventListener('click', upCounter);
//колбек функція
function upCounter() {
    counterValue += 1;
    currentValueElem.textContent = counterValue;
}