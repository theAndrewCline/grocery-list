const appDiv = document.querySelector('.app');
const addMealBtn = document.querySelector('.js-add-meal');
addMealBtn.onclick = () => {
  const newTitle = document.querySelector('.js-new-title');
  const ingredientContainers = document.querySelectorAll('.ing-cont');

  const newMeal = {
    title: newTitle.value,
    ingredients: []
  };

  ingredientContainers.forEach( (container) => {

    const newIngredient = container.querySelector('.js-new-ingredient').value;
    const newNeeded = container.querySelector('.js-new-needed').value;
    const newOnhand = container.querySelector('.js-new-onhand').value;
    const ingredient = {
      name: newIngredient,
      needed: newNeeded,
      onhand: newOnhand
    }

    newMeal.ingredients.push(ingredient);
  } )

  meals.push(newMeal)

  view(meals, appDiv);

  const IngredientContainer = document.querySelector('#IngredientContainer');
  IngredientContainer.innerHTML = `
  <div class="ing-cont">
    <div class = "ingredient-wrap">
      <h2>Ingredient:</h2><input class="js-new-ingredient" type="text">
    </div>
    <div class = "needed-wrap">
      <h2>Needed:</h2> <input class="js-new-needed" type="number">
    </div>
    <div class = "onHand-wrap">
      <h2>On Hand:</h2> <input class="js-new-onhand" type="number">
    </div>
    <button id = "addIngredientsBtn" type="button" class="add-ingredients">Add Ingredient</button>
  </div>`;
   newTitle.value = "";
}

view(meals, appDiv);
