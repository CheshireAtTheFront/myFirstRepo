// взята все блоки книг
let blokbooks = document.querySelectorAll('.book');
// взят body
let background = document.querySelector('body');
// взята ссылка-заголовок третьей книги
let titleLink = blokbooks[4].querySelector('a');
// взят блок рекламы
let adv = document.querySelector('.adv');
// взят весь список 2-ой книги
let listSecondBook = blokbooks[0].querySelectorAll('li');
// взят весь список 5-ой книги
let listFifthBook = blokbooks[5].querySelectorAll('li');
// взят весь список 6-ой книги
let listSixthBook = blokbooks[2].querySelectorAll('li');
// в 6-ой книге добавлен элемент li
let newElemSixthBook = document.createElement('li');


// Заменить картинку заднего фона на другую из папки image
background.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
// Исправить заголовок в книге 3
titleLink.textContent = "Книга 3. this и Прототипы Объектов";
// добавить текст для элемент li в шетсой книге и поместить его на свое место
newElemSixthBook.innerHTML = 'Глава 8: За пределами ES6';
listSixthBook[8].append(newElemSixthBook);
// Удалить рекламу со страницы
adv.remove();
// Востановить порядок блока книг
blokbooks[0].before(blokbooks[1]);
blokbooks[0].after(blokbooks[4]);
blokbooks[5].after(blokbooks[2]);
// востановить порядок списка второй книги
listSecondBook[2].before(listSecondBook[3]);
listSecondBook[3].after(listSecondBook[6]);
listSecondBook[4].before(listSecondBook[8]);
listSecondBook[9].after(listSecondBook[2]);
// востановить порядок списка пятой книги
listFifthBook[3].after(listFifthBook[2]);
listFifthBook[3].before(listFifthBook[9]);
listFifthBook[5].after(listFifthBook[2]);
listFifthBook[7].after(listFifthBook[5]);