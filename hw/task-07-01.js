`use strict`;
// Посчитает и выведет в консоль количество категорий в ul#categories, т
// о есть элементов li.item. Получится 'В списке 3 категории.'.
const size = document.querySelectorAll(`.item`);
console.log(`В списке ${Array.from(size).length} категории.`);
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов 
// в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
function nameLi() {
    const size = Array.from(document.querySelectorAll("ul#categories li.item"));
  
    return console.log(
      size.map(key => {
        const name = key.querySelectorAll("li").length;
        return `${key.querySelector('h2').innerText}, ${name}`;
      })
    );
  }
  nameLi();