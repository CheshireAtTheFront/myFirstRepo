"use strict";

let title;
let screens; // тип экрана
let screenPrice; // цена верстки
let adaptive;
let service1; // услуга 1
let service2; // услуга 2
let fullPrice; // итоговая стоимость
let rollPec; // процентная стоимость отката
let servicePercentPrice;  // процентная стоимость услуги
let allServicePrices; // все цены на услуги
let rollback = 66; // откат

// проверка на число
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

// вопросы пользователю
const asking = function() {
  title = prompt("Как называется ваш проект?", "проект");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые"); 

  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?", 13200);
  } while (!isNumber(screenPrice)) 
 
  adaptive = confirm("Нужен ли адаптив на сайте?");
}
// общая стоимость доп.услуг
const getAllServicePrices = function () {
  let sum = 0;
  let price = 0;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "метрика");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "отправка формы"); 
    }

    do {
      price = +prompt("Сколько это будет стоить?"); // стоимость услуги
    } while (!isNumber(price)) 

    sum += price; 

  }
  
  return sum // числа
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

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrise()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

showTypeOf(title); 
showTypeOf(fullPrice); 
showTypeOf(adaptive); 

console.log("allServicePrices" + ' ' + allServicePrices);

// стоимость за вычетом процента отката посреднику
console.log(servicePercentPrice); 
// сообщение о скидке пользователю
console.log(getRollbackMassege(fullPrice)); 
// вывод тип экранов
console.log(screens.toLowerCase().split(", ")); 

console.log(allServicePrices);
console.log(fullPrice);

console.log(typeof service1);
console.log(typeof service2);
console.log(typeof fullPrice);
console.log(typeof allServicePrices);