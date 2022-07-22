const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = [];

ingredients.forEach(function callbackfn(item) {
  const itemOfIngredients = document.createElement("li");

  itemOfIngredients.className = "item";
  itemOfIngredients.textContent = item;
  listOfIngredients.push(itemOfIngredients);
});

document.querySelector("#ingredients").append(...listOfIngredients);