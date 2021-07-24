// Задание 3.

// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

// Задание 4.

// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.



let string = prompt("Введите строчку:")
let result = string.split("").reverse().join("")
alert(result);

let randInt = Math.floor(Math.random() * 100);
console.log(randInt)