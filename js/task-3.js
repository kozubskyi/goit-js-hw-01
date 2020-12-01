// 'use strict';
// Это предотвращает определенные ошибки, такие как использование небезопасных конструкций.
// Всегда пишите код в строгом режиме.
// Если указывать в .html файл <script type="module"></script>, то 'use strict' используется автоматически.

const ADMIN_PASSWORD = 'jqueryismyjam';
let massage = prompt('Введите пароль');

// const normalizedMassage = massage.toLowerCase();
// При нажатии на "Отмена" (Отменено пользователем) браузер выдает ошибку "Cannot read property 'toLowerCase' of null".

if (massage === null) {
  massage = 'Отменено пользователем!';
} 
else if (massage === ADMIN_PASSWORD) {
  massage = 'Добро пожаловать!';
} 
else {
  massage = 'Доступ запрещен, неверный пароль!';
}

console.log(massage);
alert(massage);

// НИЖЕ СДЕЛАНО ЗАДАНИЕ 3 С ИНПУТОМ И КНОПКАМИ В HTML ФАЙЛЕ

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const passwordInputRef = document.querySelector('.task-3 input');
// const buttonLoginRef = document.querySelector('.task-3 .log-in');
// const buttonCancelRef = document.querySelector('.task-3 .cancel');

// buttonLoginRef.addEventListener('click', () => {
//   let massage = passwordInputRef.value === ADMIN_PASSWORD ? 'Добро пожаловать!' : 'Доступ запрещен, неверный пароль!';
//   alert(massage);
// })

// buttonCancelRef.addEventListener('click', () => {
//   alert('Отменено пользователем!');
// })