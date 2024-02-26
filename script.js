"use strict";
// lesson01

// значения для переменных
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 13200);
let rollback = 66;
let adaptive = confirm("Нужен ли адаптив на сайте?");

// alert("Прохожу основы по Git...");
// console.log("...со вместно с основами JS");

// -----------------------------------------------------------------------------
// lesson02
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
console.log(screens.toLowerCase().split(", "));

// процент отката посреднику за работу
const rollIntermediary = (fullPrice * (rollback/100));
console.log("Процент отката посреднику за работу: " + rollIntermediary);

// -----------------------------------------------------------------------------
// lesson03
// Динамическая типизация данных. Условие, ветвления

// Спросить у пользователя
let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

// Вычислить итоговую стоимость работы
const fullPrice = (screenPrice + servicePrice1 + servicePrice2);
console.log(fullPrice);

// Итоговая стоимость за вычетом отката
let servicePercentPrice = Math.ceil(fullPrice - rollIntermediary);
console.log(servicePercentPrice);

// Конструкция условий
if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else {
	console.log("Что то пошло не так")
}