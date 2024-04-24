// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
// *****************************************************************
// const findBtn = document.querySelector("button.btn");
// window.addEventListener("load", function (e) {
//   console.log("страница загрузилась");
// });
// findBtn.addEventListener("click", function (e) {
//   console.log("событие onclick");
// });
// *****************************************************************
// *****************************************************************
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
// *****************************************************************
// const contEl = document.querySelector("div.container");
// const btn1 = document.createElement("button");
// btn1.innerHTML = "кнопка 1";
// const btn2 = document.createElement("button");
// btn2.innerHTML = "кнопка 2";
// const btn3 = document.createElement("button");
// btn3.innerHTML = "кнопка 3";
// const btn4 = document.createElement("button");
// btn4.innerHTML = "кнопка 4";
// const btn5 = document.createElement("button");
// btn5.innerHTML = "кнопка 5";
// contEl.appendChild(btn1);
// contEl.appendChild(btn2);
// contEl.appendChild(btn3);
// contEl.appendChild(btn4);
// contEl.appendChild(btn5);

// const clickBtn = function (e) {
//   console.log(e.target.innerHTML);
// };

// btn1.addEventListener("click", clickBtn);
// btn2.addEventListener("click", clickBtn);
// btn3.addEventListener("click", clickBtn);

// count = 0;
// btn4.addEventListener("click", function (e) {
//   count++;
//   console.log(count);
// });
// btn5.addEventListener("click", function (e) {
//   e.target.innerHTML = "Вы нажали на эту кнопку";
// });
// *****************************************************************
// *****************************************************************
// Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
// *****************************************************************
// const contEl = document.querySelector("div.container");
// const btn = document.createElement("button");
// btn.innerHTML = "Кнопка";
// contEl.appendChild(btn);

// btn.addEventListener("click", function (e) {
//   const h1Text = document.createElement("h1");
//   h1Text.innerHTML = "Новый заголовок";
//   contEl.appendChild(h1Text);
// });

// const btn2 = document.createElement("button");
// btn2.innerHTML = "Кнопка удалить";
// contEl.appendChild(btn2);

// btn2.addEventListener("click", function (e) {
//   const h1Array = contEl.querySelectorAll("h1");
//   h1Array.forEach(function (el) {
//     el.remove;
//   });
// });

// const btn3 = document.createElement("button");
// btn3.innerHTML = "кнопка 3";
// contEl.appendChild(btn3);

// btn3.addEventListener("mouseover", function (e) {
//   console.log("вы навели на данную кнопку");
// });
// btn3.addEventListener("mouseleave", function (e) {
//   console.log("Наведения на кнопку больше нет");
// });
// *****************************************************************
// *****************************************************************
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”
// *****************************************************************
const contEl = document.querySelector("div.container");
const btn = document.createElement("button");
btn.innerHTML = "Кнопка";
contEl.appendChild(btn);

const ulEl = contEl.querySelector("ul");
btn.addEventListener("click", function (e) {
   const liEl = document.createElement("li");
  liEl.innerHTML = "новый элемент списка" + Math.random(1, 11);
  ulEl.appendChild(liEl);
});

const btn2 = document.createElement("button");
btn2.innerHTML = "удалить";
contEl.appendChild(btn2);
btn2.addEventListener("click", function (e) {
  const liArray = ulEl.querySelectorAll("li");
  if (liArray.length > 0) {
    liArray[0].remove();
  }
});

const btn3 = document.createElement("button");
btn3.innerHTML = "кнопка 3";
contEl.appendChild(btn3);

btn3.addEventListener("click", function (e) {
  e.target.setAttribute("class", "click");
});

// *****************************************************************
// *****************************************************************

// *****************************************************************

// *****************************************************************
// *****************************************************************
