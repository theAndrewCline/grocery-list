const ingDiv = document.getElementById('IngredientContainer');
const addIngInput = document.getElementById('addIngredientsBtn')
let counter = 0;

addIngInput.onclick = () => {
  counter += 1;
  ingDiv.insertAdjacentHTML('beforeend', `
      <div id = "IngredientContainer">
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
        </div>
      </div>`);
}

const removeIngInput = () => {
//first grab all of the buttons
  const allRemoveButtons = document.querySelectorAll('.remove');
}
