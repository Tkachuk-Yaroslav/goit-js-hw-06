const categoriesElemList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesElemList.length}`);


categoriesElemList.forEach((category) => {
    const categoryTitle = category.querySelector("h2");
    const categoryName = categoryTitle.textContent;
  //Усередині функції category => { ... } ми отримуємо назву 
  //категорії за допомогою category.querySelector('h2');. 
  //За допомогою category.querySelector('h2'), ми шукаємо 
  //перший елемент < h2 >, який є дочірнім для поточної 
  //категорії.Використання.textContent дозволяє отримати 
  //текстовий вміст цього елемента.
    const categoryElements = category.querySelectorAll("li");
    const categoryCount = categoryElements.length;
  //Ми також використовуємо category.querySelectorAll('li'), 
  //щоб знайти всі елементи < li >, які є дочірніми 
  //для поточної категорії, і потім отримати їх кількість за
  //допомогою.length.
  console.log(`Category : ${categoryName}`);
  //Для кожної категорії ми використовуємо console.log для 
  //виведення інформації про категорію та кількість елементів.
  //Використовується рядок шаблону для побудови повідомлення.
  console.log(`Elements: ${categoryCount}`);
});