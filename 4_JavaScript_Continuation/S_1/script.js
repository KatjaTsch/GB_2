//ЗАДАНИЕ 1
//  {/* <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// ******************************************************************************
// const getEl = document.querySelector("div#block");
// console.log(getEl);
// ******************************************************************************
// ******************************************************************************
// Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p> */}
// ******************************************************************************
//  const getEl = document.querySelector("div#block");
// console.log(document.querySelectorAll("div#block p.www")[0]);
//  console.log(document.querySelectorAll("div#block p.www")[0].innerHTML);
// console.log(getEl.querySelectorAll("p.www")[0]);
// ******************************************************************************
// ******************************************************************************
// ЗАДАНИЕ 2
/*Дан тег <a class="link" href="#">link text html</a>
Вам необходимо поменять текст внутри ссылки на “link text js”
Заменить href, на значение https://developer.mozilla.org/ru/*/
// ******************************************************************************
// const linkEl = document.querySelector("a.link");
// linkEl.innerHTML = "link text js";
// linkEl.href = "https://developer.mozilla.org/ru";
// ******************************************************************************
// ******************************************************************************
// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
// ******************************************************************************
// const imgEl = document.querySelector("img.photo");
// imgEl.src = 'https://static.wixstatic.com/media/432fd4b16bfe4d7895714903116c0ef3.jpg'
// ******************************************************************************
// ******************************************************************************
// ЗАДАНИЕ 3
// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел
// ******************************************************************************
// const divEl = document.querySelector("div.content");
// console.log(divEl);
// const pEl = document.createElement("p");
// pEl.innerHTML = "Новый текстовый элемент";
// console.log(pEl);
// divEl.appendChild(pEl);
// pEl.remove();
// ******************************************************************************
// ******************************************************************************
// ЗАДАНИЕ 4
// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
// ******************************************************************************
// const divEl = document.querySelector("div.content");
// console.log(divEl);
// const btnEl = document.createElement("button");
// console.log(btnEl);
// divEl.appendChild(btnEl);
// let count = 0;
// btnEl.innerHTML = "Button нажми на меня";
// btnEl.onclick = function (e) {
//   count++;
//   console.log(count);
// };
// ******************************************************************************
// ******************************************************************************
// ЗАДАНИЕ 5
// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
// ******************************************************************************
// const divEl = document.querySelector("div.content");
// console.log(divEl);
// const btnEl = document.createElement("button");
// divEl.appendChild(btnEl);
// btnEl.innerHTML = "Отправить";
// btnEl.classList.add("btn");
// btnEl.style.color = "blue";
// btnEl.onclick = function (e) {
//   console.log(e.target);
//   e.target.innerHTML = "Текст отправлен";
// };
// ******************************************************************************
// ******************************************************************************
