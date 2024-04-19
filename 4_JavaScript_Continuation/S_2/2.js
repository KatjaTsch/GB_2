// {/* <div class="block">

// </div> */}
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)
//**************************************************************************************
// const parentDivEl = document.querySelector("div.block");

// const divEl = document.createElement("div");
// divEl.classList.add("item");
// divEl.classList.add("item_1");

// parentDivEl.appendChild(divEl);
// divEl.innerHTML = "Элемент внутри";
// divEl.setAttribute("class", divEl.getAttribute('class') + " item_1");
// **************************************************************************************
//**************************************************************************************
// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem
//**************************************************************************************
// const pEl = document.querySelector("div.elem div.content p.text");
// console.log(pEl.innerHTML);
// console.log(pEl.previousElementSibling);
// console.log(pEl.parentElement);
// console.log(pEl.parentElement.previousElementSibling);
// console.log(pEl.parentElement.parentElement);
//**************************************************************************************
//**************************************************************************************
// {/* <div class="item">
//   <div class="elem">
//     <div class="info">
//       <h2 class="subtitle">Lorem, ipsum dolor.</h2>
//     </div>
//   </div>
// </div>
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */}
//**************************************************************************************
// const h2El = document.querySelector("h2.subtitle");
// console.log(h2El);
// let currentEl = h2El;
// while(currentEl.parentElement.tagName !== 'BODY'){
//     console.log(currentEl.parentElement);
//     currentEl = currentEl.parentElement;
// }
//**************************************************************************************
//**************************************************************************************

// const h2El = document.querySelector("h2.subtitle");

// function findParents(element) {
//   console.log(element);
//   if (element.parentElement.tagName !== "BODY") {
//     findParents(element.parentElement);
//   }
// }
// findParents(h2El);
//**************************************************************************************
//**************************************************************************************
// {/* <form action="#">
//   <input type="text">
//   <button class="btn">Отправить</button>
// </form>
// Дано поле ввода и кнопка отправить, необходимо реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным */}
//**************************************************************************************
    // const btnEl = document.querySelector("form button.btn");
    // const inputEl = document.querySelector('form input[type="text"]');
    // btnEl.onclick = function (e) {
    //   if (!inputEl.value && !document.querySelector("form h2")) {
    //     const h2El = document.createElement("h2");
    //     h2El.innerHTML = "вы не заполнили поле ввода";
    //     btnEl.parentElement.appendChild(h2El);
    //     inputEl.style.border = "1px solid red";
    //   }
    // };

//**************************************************************************************
//**************************************************************************************

//**************************************************************************************

//**************************************************************************************
//**************************************************************************************
