const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const IngredientsListRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.map((ingredient) => {
  const el = document.createElement('li');
  el.textContent = ingredient;
  return el  
});


IngredientsListRef.append(...ingredientsList)