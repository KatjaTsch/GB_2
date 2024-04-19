// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// const ddEl = document.querySelectorAll("a.dropdown-item");
// console.log(ddEl);
// ddEl.forEach((element) => {
//   element.classList.add("super-dropdown");
// });
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// const btnEl = document.querySelectorAll("button.btn");
// // console.log(btnEl);
// if (btnEl.classList.contains(btn-secondary)) {
//     btnEl.classList.remove("btn-secondary");
// } else {
//     btnEl.classList.add("btn-secondary");
// }

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// const ddmEl = document.querySelector("div.menu");
// ddmEl.classList.remove("dropdown-menu");

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
// const divEl = document.querySelector("div.dropdown");
// divEl.insertAdjacentHTML("afterbegin", '<a href="#">link</a>');
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// const idEl = document.querySelector("button#dropdownMenuButton");
// console.log(idEl);
// idEl.id = "superDropdown";
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// const attEl = document.querySelector(
//   'div[aria-labelledby="dropdownMenuButton"]'
// );
// console.log(attEl);
// attEl.dataset.dd = 3;
// console.log(attEl);
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const ddEl = document.querySelector("button.dropdown-toggle");
console.log(ddEl);
ddEl.removeAttribute('type');
