function view(meals, container) {
  let htmlString = "";

  // builds all the meals
  for (let i=0; i<meals.length; i+=1) {
    const title = meals[i].title;
    let ingString = "";

    // builds ingredient list
    for (let j=0; j<meals[i].ingredients.length; j+=1) {
      const name = meals[i].ingredients[j].name;
      const qtyNeeded = meals[i].ingredients[j].needed;
      const onhand = meals[i].ingredients[j].onhand;
      ingString += ingredientTemplate(name, qtyNeeded, onhand);
    }

    htmlString += mealTemplate(title, ingString);
  }

  container.innerHTML = htmlString;
  removeBtn(meals, container);
}
