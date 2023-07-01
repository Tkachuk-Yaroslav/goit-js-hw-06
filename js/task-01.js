const categoriesElemList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesElemList.length}`);


categoriesElemList.forEach((category) => {
  const categoryTitle = category.firstElementChild.textContent;
  // const categoryTitle = category.querySelector("h2");
  // const categoryName = categoryTitle.textContent;
  const categoryElements = category.lastElementChild.children;
  // const categoryElements = category.querySelectorAll("li");
  const categoryCount = categoryElements.length;
  
  console.log(`Category : ${categoryTitle}`);
  console.log(`Elements: ${categoryCount}`);
});