// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
// ************************************************************
// const divEl = document.querySelector("div.form");
// console.log(divEl);
// const btnEl = divEl.querySelector("button.btn");
// console.log(btnEl);
// const checkEl = divEl.querySelector("input.check");
// console.log(checkEl);

// btnEl.addEventListener("click", function (e) {
//   if (!checkEl.checked) {
//     const spanEl = document.createElement("span");
//     spanEl.innerHTML = "Необходимо согласиться с условиями";
//     divEl.appendChild(spanEl);
//   }
// });
// ************************************************************
// ************************************************************
// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”
// ************************************************************
// const divEl = document.querySelector("div.container");
// console.log(divEl);
// const teaEl = divEl.querySelector("input.teaCheck");
// console.log(teaEl);
// const coffeeEl = divEl.querySelector("input.coffeeCheck");
// console.log(coffeeEl);

// const btnEl = divEl.querySelector("button.btn");
// console.log(btnEl);

// btnEl.addEventListener("click", function (e) {
//   if (teaEl.checked) {
//     console.log("Чай закончился");
//   } else if (coffeeEl.checked) {
//     console.log("кофе закончился");
//   } else{
//     console.log('всё в наличии');
//   }
// });
// ************************************************************
// ************************************************************
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”
// ************************************************************
// const password = "123456";
// const divEl = document.querySelector("div.container");
// console.log(divEl);
// const inpEl = divEl.querySelector("input.password");
// console.log(inpEl);
// const btnEl = divEl.querySelector("button.btn");
// console.log(btnEl);

// btnEl.addEventListener("click", function (e) {
//   if (inpEl.value === password) {
//     inpEl.classList.add("bdGreen");
//     inpEl.classList.remove("bdRed");
//   } else {
//     inpEl.classList.add("bdRed");
//     inpEl.classList.remove("bdGreen");
//   }
// });
// ************************************************************
// ************************************************************
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода
// ************************************************************
// const divEl = document.querySelector("div.container");
// console.log(divEl);
// const inpEl = divEl.querySelector("input.input");
// console.log(inpEl);
// const h2El = divEl.querySelector("h2.title");
// console.log(h2El);
// const h3El = divEl.querySelector("h3.subTitle");
// console.log(h3El);

// inpEl.addEventListener("input", function (e) {
//   h2El.innerHTML = e.target.value;
// });
// inpEl.addEventListener("change", function (e) {
//   h3El.innerHTML = e.target.value;
// });
// ************************************************************
// ************************************************************
