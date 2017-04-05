const ingDiv = document.getElementById('IngredientContainer');
const addIngInput = document.getElementById('addIngredientsBtn')
let counter = 0;

addIngInput.onclick = () => {
  counter += 1;
  ingDiv.insertAdjacentHTML('beforeend', `
  <div class = "ing-cont">
    Ingredient: <input class="js-new-ingredient" type="text">
    Needed: <input class="js-new-needed" type="number">
    On Hand: <input class="js-new-onhand" type="number">
   </div>`);
}

const removeIngInput = () => {
//first grab all of the buttons
  const allRemoveButtons = document.querySelectorAll('.remove');
}
