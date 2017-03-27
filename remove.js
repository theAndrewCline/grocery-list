function removeBtn(meals, container) {
  const removeBtns = document.querySelectorAll('.js-remove-meal');
  
  for (let i=0; i<removeBtns.length; i+=1) {
    removeBtns[i].onclick = function() {
      meals.splice(i,1);
      view(meals, container);
    }
  }
  
}