//маємо початково
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//спочатку знайду список за айдішніком
const ingredientsElem = document.querySelector("#ingredients");


const itemElem = ingredients.map((ingredient) => {
  //під час кожного проходження циклу створюю лішку
  const item = document.createElement("li");
  //добавляю текстовий контент в лішку
  item.textContent = ingredient;
  //добавляю лішці клас
  item.classList.add("item");
  return item;
});

// console.log(itemElem);
//розпиляю масив
ingredientsElem.append(...itemElem)
