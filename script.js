// значения для переменных
let title = "Проект второго урока";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 13200;
let rollback = 66;
let fullPrice = 100000;
let adaptive = true;

// alert("Прохожу основы по Git...");
// console.log("...со вместно с основами JS");

// методы и свойства переменных

// тип данных
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// длина строки
console.log(screens.length);

// стоимость верстки экранов
console.log(`Стоимость верстки экранов: ${screenPrice}$`);
console.log(`Стоимость верстки экранов: ${fullPrice}$`);

// привести строку к нижнему регистру и разбить на массив
const lowCase = screens.toLowerCase();
console.log(lowCase.split());

// процент отката посреднику за работу
const rollIntermediary = (fullPrice * (rollback/100))
console.log("Процент отката посреднику за работу: " + rollIntermediary);
