// В JS есть массив строк.
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//  Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().


const ingredientsList = document.querySelector('#ingredients');

const createElementIngredientsItem = element => {
    const liEl = document.createElement('li');
    liEl.textContent = element;
    
    return liEl;
};

const ingredientItemEl = ingredients.map(ingredient => 
  createElementIngredientsItem(ingredient));

ingredientsList.append(...ingredientItemEl);

console.log(ingredientsList);