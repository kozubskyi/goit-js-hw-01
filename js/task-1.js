// 'use strict';
// Это предотвращает определенные ошибки, такие как использование небезопасных конструкций.
// Всегда пишите код в строгом режиме.
// Если указывать в .html файл <script type="module"></script>, то 'use strict' используется автоматически.

const name = 'Генератор защитного поля';
let price = 1000;

let chosenProduct = `Выбран ${name}, цена за штуку ${price} кредитов`;

console.log(chosenProduct)

price = 2000;
chosenProduct = `Выбран ${name}, цена за штуку ${price} кредитов`;

console.log(chosenProduct)