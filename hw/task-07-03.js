`use strict`;
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.


// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector("#gallery");
gallery.classList.add("css-gallery");

const imagesAsLi = images.map(image => {
  const imageAsListItem = document.createElement("li");
  imageAsListItem.insertAdjacentHTML(
    "beforeend",
    `<img src="${image.url}" alt="${image.alt}">`
  );
  imageAsListItem.setAttribute("class", "gallery__item");

  return imageAsListItem;
});

gallery.append(...imagesAsLi);


// вариант 2
// const letUl = document.querySelector("ul#gallery");
// function insertImages(arr) {
//   const arrImg = arr.map(key => {
//     const imgEl = document.createElement("li");
//     imgEl.insertAdjacentHTML("afterbegin", `<img src='${key.url}' alt='${key.alt}' width=300 height=220>`);
//     return imgEl;
//   });
//   return letUl.prepend(...arrImg);
// }

// insertImages(images);

// letUl.style.display = "flex";
// letUl.style.justifyContent = "space-around"; 



































