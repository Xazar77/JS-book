'use strict';


const books = document.querySelectorAll('.book'),
    body = document.querySelector('body'),
    title = document.querySelectorAll('a'),
    adv = document.querySelector('.adv'),
    ul = books[0].querySelector('ul'),  // получение элементов 2 книги
    el = ul.querySelectorAll('li'),
    ul1 = books[5].querySelector('ul'), // получение элементов 5 книги
    el1 = ul1.querySelectorAll('li'),
    ul2 = books[2].querySelector('ul'), // получение элементов 5 книги
    el2 = ul2.querySelectorAll('li');


//  Восстановление порядка книг

books[0].before(books[1]);
books[5].after(books[2]);
books[3].before(books[4]);

// Смена заднего фона
body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

//Исправление заголовка Книги 3
title[4].innerHTML = 'Книга 3. this и Прототипы Объектов';

//Удаление рекламы со страницы
adv.remove();

// Восстановить порядок глав во второй книгe
el[4].before(el[6]);
el[4].before(el[8]);
el[9].after(el[2]);

//Восстановить порядок глав в пятой книге
el1[1].after(el1[9]);
el1[4].after(el1[2]);
el1[2].after(el1[6]);
el1[6].after(el1[7]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

const newEl2 = document.createElement('li');
newEl2.innerHTML = 'Глава 8: За пределами ES6';
ul2.append(newEl2);

el2[9].before(newEl2);




