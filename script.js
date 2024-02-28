"use strict";
// lesson01

// значения для переменных
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 13200);
let rollback = 66;
let adaptive = confirm("Нужен ли адаптив на сайте?");

// -----------------------------------------------------------------------------
// lesson02
// методы и свойства переменных
// процент отката посреднику за работу
let rollIntermediary = (fullPrice * (rollback/100));

// -----------------------------------------------------------------------------
// lesson03
// Динамическая типизация данных. Условие, ветвления
// Спросить у пользователя
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let discount = "";

// Вычислить итоговую стоимость работы
let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
// Итоговая стоимость за вычетом отката
let servicePercentPrice = Math.ceil(fullPrice - rollIntermediary);

// Конструкция условий
if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  discount = "Даем скидку в 5%";
} else if (fullPrice <= 15000 && fullPrice > 0) {
  discount = "Скидка не предусмотрена";
} else {
	discount = "Что то пошло не так";
}

// Логи

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
console.log(screens.toLowerCase().split(", "));
// процент отката посреднику за работу
console.log("Процент отката посреднику за работу: " + rollIntermediary);

// lesson03
// Спросить у пользователя
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
// Вычислить итоговую стоимость работы
console.log(fullPrice);
// Итоговая стоимость за вычетом отката
console.log(servicePercentPrice);

console.log(discount);