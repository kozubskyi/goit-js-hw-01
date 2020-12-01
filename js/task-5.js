// 'use strict';
// Это предотвращает определенные ошибки, такие как использование небезопасных конструкций.
// Всегда пишите код в строгом режиме.
// Если указывать в .html файле <script type="module"></script>, то 'use strict' используется автоматически.

let country = prompt('Укажите страну доставки');
const normalizedCountry = country.toLowerCase();
// При нажатии на "Отмена" (Отменено пользователем) браузер выдает ошибку "Cannot read property 'toLowerCase' of null".

let price;

// if (normalizedCountry === 'китай') {
//   price = 100;
//   alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// }
// else if (normalizedCountry === 'чили') {
//   price = 250;
//   alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// }
// else if (normalizedCountry === 'австралия') {
//   price = 170;
//   alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// }
// else if (normalizedCountry === 'индия') {
//   price = 80;
//   alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// }
// else if (normalizedCountry === 'ямайка') {
//   price = 120;
//   alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// }
// else {
//   alert('В вашей стране доставка не доступна');
// }

switch (normalizedCountry) {
  case 'китай':
    price = 100;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  
  case 'чили':
    price = 250;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  
  case 'австралия':
    price = 170;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'индия':
    price = 80;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  
  case 'ямайка':
    price = 120;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
    break;
}

// НИЖЕ СДЕЛАНО ЗАДАНИЕ 5 С ИНПУТОМ И КНОПКАМИ В HTML ФАЙЛЕ

// const countryInputRef = document.querySelector('.task-5 input');
// const buttonSubmitRef = document.querySelector('.task-5 .submit');
// const buttonCancelRef = document.querySelector('.task-5 .cancel');

// console.log(typeof countryInputRef); // object
// console.log(typeof countryInputRef.value); // string

// buttonSubmitRef.addEventListener('click', () => {

//   const htmlCountry = countryInputRef.value.toLowerCase();
//   let htmlPrice;

//   switch (htmlCountry) {
//     case 'китай':
//       htmlPrice = 100;
//       alert(`Доставка в ${htmlCountry} будет стоить ${htmlPrice} кредитов`);
//       break;
    
//     case 'чили':
//       htmlPrice = 250;
//       alert(`Доставка в ${htmlCountry} будет стоить ${htmlPrice} кредитов`);
//       break;
    
//     case 'австралия':
//       htmlPrice = 170;
//       alert(`Доставка в ${htmlCountry} будет стоить ${htmlPrice} кредитов`);
//       break;

//     case 'индия':
//       htmlPrice = 80;
//       alert(`Доставка в ${htmlCountry} будет стоить ${htmlPrice} кредитов`);
//       break;
    
//     case 'ямайка':
//       htmlPrice = 120;
//       alert(`Доставка в ${htmlCountry} будет стоить ${htmlPrice} кредитов`);
//       break;

//     default:
//       alert('В вашей стране доставка не доступна');
//     break;
//   }
  
// })

// buttonCancelRef.addEventListener('click', () => {
//   alert('Отменено пользователем!');
// })