"use strict";
// Получить заголовок "Калькулятор верстки" (тэг h1, получить именно элемент, а не коллекцию)
const heading = document.getElementsByTagName('h1')[0];
// Получить кнопки "Рассчитать" и "Сброс" 
const btnClear = document.getElementsByClassName('handler_btn')[0];
const btnReset = document.getElementsByClassName('handler_btn')[1];
// Получить кнопку "+" под выпадающим списком 
const btnAdd = document.querySelector('.screen-btn');
/* Получить все элементы с классом other-items в две разные переменные. В первую элементы у которых так же присутствует класс percent, во 
вторую элементы у которых так же присутствует класс number*/
const percent = document.querySelectorAll('.other-items.percent');
const number  = document.querySelectorAll('.other-items.number');
// Получить input type=range через его родителя с классом rollback одним запросом.
const range = document.querySelector('.rollback [type="range"]');
// Получить span с классом range-value через его родителя с классом rollback одним запросом.
const spanValue = document.querySelector('.rollback .range-value');
// Получить все инпуты с классом total-input 
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
// Получить все блоки с классом screen 
let screen = document.querySelectorAll('.screen');

console.log(heading);
console.log(btnClear);
console.log(btnReset);
console.log(btnAdd);
console.log(percent);
console.log(number);
console.log(range);
console.log(spanValue);
console.log(total);
console.log(totalCount);
console.log(totalCountOther);
console.log(totalFullCount);
console.log(totalCountRollback);
console.log(screen);


const appData = {
  title: "",
  screens: [], // тип экрана
  screenPrice: 0, // цена верстки
  adaptive: true,
  services: {}, // услуги
  fullPrice: 0, // итоговая стоимость
  servicePercentPrice: 0,  // процентная стоимость услуги
  allServicePrices: 0, // все цены на услуги
  rollback: 66, // откат
  // метод функционала
  start: function () {
    // this.getTitle();
    // this.asking();
		// this.priceOfAdditionalServices();
		// this.questionAddaptiv();
		// this.addPrices();
    // this.getFullPrise();
    // this.getServicePercentPrices();
    // this.logger();
  },
	// название проекта
	getTitle: function () {
		do {
			this.title = prompt("Как называется ваш проект?", "  каЛькуляТор");
		} while (!this.isString(this.title))

		this.changeTitle(this.title);

	},
// вопросы по стоимости работы
  asking: function () {
			for (let i = 0; i < 2; i++) {
				let name = "";
				let price = 0;

				do {
					name = prompt("Какие типы экранов нужно разработать?", "Простые");
				} while (!this.isString(name))

				do {
					price = prompt("Сколько будет стоить данная работа?", 25000);
				} while (!this.isNumber(price))

				this.screens.push({id: i, name: name, price: +price});

			}

  },
// вопрос о цене на доп услуги
	priceOfAdditionalServices: function () {
		for (let i = 0; i < 2; i++) {
			let name = "";
			let price = 0;
	
			do {
				name = prompt("Какой дополнительный тип услуги нужен?", "метрика");
			} while (!this.isString(name))
	
			do {
				price = prompt("Сколько это будет стоить?"); // стоимость услуг
			} while (!this.isNumber(price))  

			this.services[name + [i]] = +price;
	
			}
	},
	// вопрос по адаптиву
	questionAddaptiv: function () {
		this.adaptive = confirm("Нужен ли адаптив на сайте?");
	},
	// сумма экранов и доп. услуг
	addPrices: function () {
		for (let key in this.services) {
			this.allServicePrices += this.services[key];
		} 

		let result = this.screens.reduce(function (screenPrice, screen) {
			return screenPrice + +screen.price
		}, 0)

		this.screenPrice = result;

		// for (let screen of this.screens) {
		// 	this.screenPrice += +screen.price
		// }
	},

  // редактирование название проекта
  changeTitle: function () {
    this.title = this.title.trim()[0].toUpperCase() + this.title.trim().slice(1).toLowerCase();
  },
	// проверка на строку
	isString: function (str) {
		if (isNaN(str)) {
			return true
		} else {
			return false;
		}
	},
  // проверка на число
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  // стоимость верстки + доп.услуг
  getFullPrise: function () {
    this.fullPrice = this.screenPrice + this.allServicePrices
  },
  // итоговая стоимость за вычетом процента отката
  getServicePercentPrices: function () {
    this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice *(this.rollback / 100)));
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
		console.log(this.fullPrice);
		console.log(this.servicePercentPrice);
		console.log(this.allServicePrices);
		console.log(this.screens);
		console.log(this.services);
		console.log(this.screenPrice);
  },
};

appData.start();