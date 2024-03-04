"use strict";

let title = prompt("Как называется ваш проект?", "проект");

let screens = prompt("Какие типы экранов нужно разработать?", "Простые"); // тип экрана
let screenPrice = +prompt("Сколько будет стоить данная работа?", 13200); // цена верстки
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?", "метрика");  // услуга 
let servicePrice1 = +prompt("Сколько это будет стоить?", 1000); // стоимость услуги
let service2 = prompt("Какой дополнительный тип услуги нужен?", "отправка формы"); // услуга 
let servicePrice2 = +prompt("Сколько это будет стоить?", 2000); // стоимость услуги
let rollback = 66; // откат

let fullPrice // итоговая стоимость
let rollPec // процентная стоимость отката
let servicePercentPrice  // процентная стоимость услуги
let allServicePrices // все цены на услуги

// общая стоимость доп.услуг
const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2
};
// показать тип
const showTypeOf = function (typeVar) {
  return `${typeVar}` + ' ' + typeof typeVar 
}
// сумма верстки и доп.услуг
const getFullPrise = function () {
  return screenPrice + allServicePrices
};
// итоговая стоимость за вычетом процента отката
const getServicePercentPrices = function () {
  return Math.ceil(fullPrice - (fullPrice *(rollback / 100))); 
};
// редактирование название проекта
const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().slice(1);
};
// определение скидки
const getRollbackMassege = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrise();
servicePercentPrice = getServicePercentPrices(); 
title = getTitle();

showTypeOf(title); 
showTypeOf(fullPrice); 
showTypeOf(adaptive); 

// стоимость за вычетом процента отката посреднику
console.log(servicePercentPrice); 
// сообщение о скидке пользователю
console.log(getRollbackMassege(fullPrice)); 
// вывод тип экранов
console.log(screens.toLowerCase().split(", ")); 