// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */}
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


"use strict";


const input = document.querySelector("#validation-input");
const sizeNumber = Number(input.getAttribute("data-length"));

const borderColor = function(total) {
  if (total.target.value.length === sizeNumber) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
};
input.addEventListener("blur", borderColor);

