function ingredientTemplate(name, qty, inv) {
  return `
    <li>
      ingredient: ${ name }<br />
      recipe calls for: ${ qty }<br />
      we have: ${ inv }
    </li>
  `;
}

function mealTemplate(title, ings) {
  return `
    <div class="meal">
      <h2 class="meal-title">${ title }</h2>
      <div class="meal-ingredients">
        <ul>
          ${ ings }
        </ul>
      </div>
      <div class="meal__btn-container">
        <button class="meal__edit-btn js-edit-meal">Edit Meal</button>
        <button class="meal__remove-btn js-remove-meal">Remove Meal</button>
      </div>
    </div>
  `;
}
