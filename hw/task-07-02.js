`use strict`;


// В HTML есть пустой список ul#ingredients.

// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы', 
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const htmlUl = document.querySelector("ul#ingredients");
const htmlLi = ingredients.map(key => {
  const htmlNewLi = document.createElement("LI");
  htmlNewLi.textContent = key;
  return htmlNewLi;
});
// console.log(htmlLi)
htmlUl.prepend(...htmlLi)
console.log(htmlUl)
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов 
// используй document.createElement().