// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
`use strict`;
let decrement = document.querySelector('#counter button[data-action="decrement"]');
let increment = document.querySelector(`#counter button[data-action="increment"]`);
const value = document.querySelector(`#value`)
let counterValue = 0
const increase = () =>{
    value.textContent = counterValue +=1
};
const decrese = () =>{
    value.textContent = counterValue -=1
};
decrement.addEventListener(`click`, decrese);
increment.addEventListener(`click`, increase);