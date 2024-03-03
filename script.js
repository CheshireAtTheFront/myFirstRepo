"use strict";

let title = prompt("Как называется ваш проект?");

const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"); // тип экрана
const screenPrice = +prompt("Сколько будет стоить данная работа?", 13200); // цена верстки
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");  // услуга 
const servicePrice1 = +prompt("Сколько это будет стоить?"); // стоимость услуги
const service2 = prompt("Какой дополнительный тип услуги нужен?"); // услуга 
const servicePrice2 = +prompt("Сколько это будет стоить?"); // стоимость услуги
const rollback = 66; // откат

let fullPrice = 0; // итоговая стоимость
let rollPec = fullPrice - (fullPrice * (rollback/100)); // процентная стоимость отката
let servicePercentPrice = 0; // процентная стоимость услуги
let allServicePrices = 0; // все цены на услуги

// общая стоимость доп.услуг
const getAllServicePrices = function(servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2
};
// сумма верстки и доп.услуг
function getFullPrise(screenPrice) {
  return screenPrice + getAllServicePrices(servicePrice1, servicePrice2);
};
// редактирование название проекта
const getTitle = function(title) {
  if (title[0] === ' ') {
    title = title.trimStart();
    return title[0].toUpperCase() + title.slice(1);
  }
  return title.charAt(0).toUpperCase() + title.slice(1);
};

// итоговая стоимость за вычетом процента отката
const getServicePercentPrices = function(fullPrice, rollPec) {
  return Math.ceil(fullPrice - rollPec); 
};

const getRollbackMassege = function(price) {
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

// показать тип
const showTypeOf = function(typeVar) {
  return `${typeVar}` + ' ' + typeof typeVar 
}

servicePercentPrice = getServicePercentPrices(fullPrice, rollPec); 
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrise(screenPrice);

getTitle(title);
showTypeOf(title); 
showTypeOf(fullPrice); 
showTypeOf(adaptive); 

// стоимость за вычетом процента отката посреднику
console.log(servicePercentPrice); 
// сообщение о скидке пользователю
console.log(getRollbackMassege(fullPrice)); 
// вывод тип экранов
console.log(screens.toLowerCase().split(", ")); 