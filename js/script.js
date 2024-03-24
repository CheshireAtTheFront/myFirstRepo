'use strict'

const title = document.getElementsByTagName('h1')[0];
const btnAdd = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber  = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback [type="range"]');
const spanRangeValue = document.querySelector('.rollback .range-value');

const btnStart = document.getElementsByClassName('handler_btn')[0];
const btnReset = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
	rollback: 10, 
	servicePricesPercent: 0, 
  servicePricesNumber: 0, 
  fullPrice: 0,
  servicePercentPrice: 0,
	servicesPercent: {},
	servicesNumber: {},

	addTitle: function() {
		document.title = title.textContent;
	},

	getScreen: () => {
		return document.querySelectorAll('.screen');
	},

	resetScreenBlock: function(block) {
		const select = block.querySelector('select');
		const input = block.querySelector('input');
		select.options[0];
		input.value = '';
	},

	addRangeInRollback: function() {
		this.rollback = inputRange.value;
	},

	sliderValueChanges: function(event) {
		spanRangeValue.textContent = event.target.value + "%";
	},

	showResult: function() {
		total.value = this.screenPrice;
		totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
		totalFullCount.value = this.fullPrice;
	},

	checkingCompletedData: function() {
		screens = appData.getScreen();
		screens.forEach((screen) => {
			const select = screen.querySelector('select');
			const input = screen.querySelector('input');
			if(select.value === "" || +input.value === 0) {
				btnStart.style.disabled = "true";
				btnStart.style.backgroundColor = "#f0f0f0";
			} else {
				btnStart.style.disabled = "false";
				btnStart.style.backgroundColor = "#A52A2A";
			}
		});
	},

	addScreenBlock: function() {
		const cloneScreen = screens[screens.length - 1].cloneNode(true);
		screens = appData.getScreen();
		appData.resetScreenBlock(cloneScreen);
		screens[screens.length - 1].after(cloneScreen);
		appData.checkingCompletedData();
	},

	addScreens: function() {
		appData.screens = [];
		screens = appData.getScreen();
		screens.forEach(function(screen, index) {
			const select = screen.querySelector('select');
			const input = screen.querySelector('input');
			const selectName = select.options[select.selectedIndex].textContent;

			appData.screens.push({
				id: index, 
				name: selectName,  
				price: +select.value * +input.value,
				count: +input.value,
			});
		})
		appData.checkingCompletedData();
	},

	addServices: function() {
		appData.servicesPercent = {};
		otherItemsPercent.forEach(function(item) {
			const check = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');
			
			if(check.checked) {
				appData.servicesPercent[label.textContent] = +input.value;
			}
		});

		otherItemsNumber.forEach(function(item) {
			appData.servicesPercent = {};
			const check = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');
			
			if(check.checked) {
				appData.servicesNumber[label.textContent] = +input.value;
			}
		})
	},

	addPrices: function() {
		let priceScreens = this.screens.reduce(function (screenPrice, screen) {
			return screenPrice + +screen.price
		}, 0)
		this.screenPrice = priceScreens;

		let numberOfScreens = this.screens.reduce(function (screenPrice, screen) {
			return screenPrice + +screen.count
		}, 0)
		totalCount.value = numberOfScreens;

		for (let key in this.servicesNumber) {
			this.servicePricesNumber += this.servicesNumber[key];
		} 

		for (let key in appData.servicesPercent) {
			appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
		} 

		this.fullPrice = this.screenPrice + this.servicePricesPercent + this.servicePricesNumber
		// итоговая стоимость за вычетом процента отката
		this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice *(this.rollback / 100)));

		totalCountRollback.value = this.servicePercentPrice;
	},

	isString: function (str) {
		if (isNaN(str)) {
			return true
		} else {
			return false;
		}
	},

  logger: function () {
    for (let key in appData) {
      console.log("Ключ: " + key + " " + "Значение: " + appData[key]);
    }
  },

	start: function() {
		appData.addScreens();
		appData.addServices();
		appData.addPrices();
    // this.logger();
		appData.showResult();
  },

	init: function() {
		this.addTitle()
		this.checkingCompletedData();
		btnStart.addEventListener('click', this.start);
		btnAdd.addEventListener('click', this.addScreenBlock);
		inputRange.addEventListener('input', this.sliderValueChanges);
		inputRange.addEventListener('change', this.sliderValueChanges);
		inputRange.addEventListener('change', this.addRangeInRollback);
	},
};

appData.init();