//ловлю форму
const formElem = document.querySelector("form");
// console.log(formElem);
//на форму вішаю прослуховувач відправки форми
formElem.addEventListener("submit", onSubmitForm);
//колбек для прослуховувача
function onSubmitForm(event) {
    //забираю дефолтну подію браузера
    event.preventDefault();
    //беру значення з полів інпутів
    const emailElem = formElem.elements.email;
    const passwordElem = formElem.elements.password;
    //якщо поле пусте вивожу альорт
    if (emailElem.value === "" || passwordElem.value === "") {
        alert("Please fill in all fields and try again!");
    } else {
        //створив об'єкт зі значеннями що ввів користувач
        const userDataObj = {
            email: emailElem.value,
            password: passwordElem.value,
        }
        //вивів об'єкт
        console.log(userDataObj);
        //очистив значення полів форми ресетом
        formElem.reset();
    }
}
