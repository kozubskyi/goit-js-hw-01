// 'use strict';
// Это предотвращает определенные ошибки, такие как использование небезопасных конструкций.
// Всегда пишите код в строгом режиме.
// Если указывать в .html файл <script type="module"></script>, то 'use strict' используется автоматически.

let total = 0;

while (true) {
  let input = prompt('Введіть число');

  if (input === null) {
    break;
  }

  input = Number(input);

  // if (input === NaN) {
  //   alert('Було написано не число, спробуйте ще раз');
  //   continue;
  // }

  // Почему верхний код не работает?

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert('Було написано не число, спробуйте ще раз');
    continue;
  }

  total += input;
}

console.log(`Загальна сума чисел дорівнює ${total}`);
alert(`Загальна сума чисел дорівнює ${total}`);