const ingDiv = document.querySelector('.ing-cont');
const addIngInputBtn = document.querySelector('.add-ingredients');
let counter = 0;

addIngInputBtn.onclick = function addIngInput() {
  counter += 1;
  ingDiv.innerHTML += 'Ingredient: <input class="js-new-ingredient' + counter + '" type="text">';
  console.log(counter);
  console.log(ingDiv.innerHTML);
}
