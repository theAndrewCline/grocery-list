const appDiv = document.querySelector('.app');
const addMealBtn = document.querySelector('.js-add-meal');
addMealBtn.onclick = function() {
  const newTitle = document.querySelector('.js-new-title').value;
  const newIngredient = document.querySelector('.js-new-ingredient').value;
  const newNeeded = document.querySelector('.js-new-needed').value;
  const newOnhand = document.querySelector('.js-new-onhand').value;

  const obj = {};

  obj.title = newTitle;
  obj.ingredients = [
    {
      name: newIngredient,
      needed: newNeeded,
      onhand: newOnhand
    }
  ];

  meals.push(obj);

  view(meals, appDiv);
}

view(meals, appDiv);
