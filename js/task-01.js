const categories = document.querySelector("#categories");
const number = categories.querySelectorAll(".item");
const numberOfCategories = `Number of categories: ${number.length}`;
console.log(numberOfCategories);

const nodeListItem = categories.querySelectorAll(".item");

nodeListItem.forEach(function callbackfn(items) {
  const categoryItem = items.querySelector("h2");
  const categoryName = `Category: ${categoryItem.textContent}`;
  console.log(categoryName);

  const tlemtnts = items.querySelectorAll("li");
  const categoriesElements = `Elements: ${tlemtnts.length}`;
  console.log(categoriesElements);
});