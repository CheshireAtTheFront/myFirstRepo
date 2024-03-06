"use strict";

const appData = {
  title: "",
  screens: "", // тип экрана
  screenPrice: 0, // цена верстки
  adaptive: true,
  service1: "", // услуга 1
  service2: "", // услуга 2
  fullPrice: 0, // итоговая стоимость
  servicePercentPrice: 0,  // процентная стоимость услуги
  allServicePrices: 0, // все цены на услуги
  rollback: 66, // откат

  asking: function () {
    this.title = prompt("Как называется ваш проект?", "  каЛькуляТор");
    this.screens = prompt("Какие типы экранов нужно разработать?", "Простые"); 
  
    do {
        this.screenPrice = +prompt("Сколько будет стоить данная работа?", 25000);
    } while (!this.isNumber(this.screenPrice)) 
   
    this.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  // редактирование название проекта
  getTitle: function () {
    return this.title.trim()[0].toUpperCase() + this.title.trim().slice(1);
  },
  // проверка на число
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  // общая стоимость доп.услуг
  getAllServicePrices: function () {
    let sum = 0;
  
    for (let i = 0; i < 2; i++) {
      let price = 0;
  
      if (i === 0) {
        this.service1 = prompt("Какой дополнительный тип услуги нужен?", "метрика");
      } else if (i === 1) {
        this.service2 = prompt("Какой дополнительный тип услуги нужен?", "отправка формы"); 
      }
  
      do {
          price = prompt("Сколько это будет стоить?"); // стоимость услуг
      } while (!this.isNumber(price)) 
  
      sum += +price; 
  
    }
    
    return sum 
  },
  // стоимость верстки + доп.услуг
  getFullPrise: function () {
    return this.screenPrice + this.allServicePrices
  },
  // итоговая стоимость за вычетом процента отката
  getServicePercentPrices: function () {
    return Math.ceil(this.fullPrice - (this.fullPrice *(this.rollback / 100)));
  },
  // определение скидки
  getRollbackMassege: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
  // метод вывода в консоль
  logger: function () {
    for (let key in appData) {
      console.log("Ключ: " + key + " " + "Значение: " + appData[key]);
    }
  },
  // метод функционала
  start: function () {
    this.asking();
    this.allServicePrices = this.getAllServicePrices();
    this.fullPrice = this.getFullPrise();
    this.servicePercentPrice = this.getServicePercentPrices();
    this.title = this.getTitle();
    this.logger();
  },
};

appData.start();