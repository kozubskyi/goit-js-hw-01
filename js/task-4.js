// 'use strict';
// Это предотвращает определенные ошибки, такие как использование небезопасных конструкций.
// Всегда пишите код в строгом режиме.
// Если указывать в .html файл <script type="module"></script>, то 'use strict' используется автоматически.

let credits = 23580;
let pricePerDroid = 3000;

let massage = prompt('Какое количество дроидов Вы хотите купить?');
const quantity = Math.floor(Number(massage));

// if (massage === null) {
//   massage = 'Отменено пользователем!';
// } 
if (quantity === 0) {
  massage = 'Отменено пользователем!';
} 
else if (quantity > 0) {
  let totalPrice = pricePerDroid * quantity;

  if (totalPrice > credits) {
    massage = 'Недостаточно средств на счету!';
  }
  else {
    let balance = credits - totalPrice;
    massage = `Вы купили ${quantity} дроидов на сумму ${totalPrice} кредитов, на счету осталось ${balance} кредитов`;
  }
} 
else {
  massage = 'Некорректно введены данные';
}

console.log(massage);
alert(massage);

// НИЖЕ СДЕЛАНО ЗАДАНИЕ 4 С ИНПУТОМ И КНОПКАМИ В HTML ФАЙЛЕ

// let credits = 23580;
// let pricePerDroid = 3000;

// const droidQuantityInputRef = document.querySelector('.task-4 input');
// const buttonSubmitRef = document.querySelector('.task-4 .submit');
// const buttonCancelRef = document.querySelector('.task-4 .cancel');

// console.log(typeof droidQuantityInputRef); // object
// console.log(typeof droidQuantityInputRef.value); // string
// console.log(typeof quantity); // number

// buttonSubmitRef.addEventListener('click', () => {
//   const quantity = Number(droidQuantityInputRef.value);
//   let totalPrice = pricePerDroid * quantity;

//   if (totalPrice > credits) {
//     alert('Недостаточно средств на счету!');
//   }
//   else if (totalPrice <= 0) {
//     alert('Некорректно введены данные');
//   }
//   else {
//     let balance = credits - totalPrice;
//     alert(`Вы купили ${quantity} дроидов на сумму ${totalPrice} кредитов, на счету осталось ${balance} кредитов`);
//   }
// })

// buttonCancelRef.addEventListener('click', () => {
//   alert('Отменено пользователем!');
// })