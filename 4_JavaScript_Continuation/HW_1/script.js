// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// const idEl = document.querySelector("a#super_link");
// console.log(idEl);
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// const aEl = document.querySelectorAll("a.card-link");
// console.log(aEl);
// aEl.forEach(element => {
//     console.log(element);
//     element.innerHTML = 'ссылка';
//     console.log(element);
// });

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// const linkEl = document.querySelectorAll("div.card-body a.card-link");
// console.log(linkEl);
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// const attrEl = document.querySelector('[data-number="50"]');
// console.log(attrEl);
// 5. Выведите содержимое тега title в консоль.
// const titleEl = document.querySelector("h5.card-title");
// console.log(titleEl.innerHTML);
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// const titleEl = document.querySelector("h5.card-title");
// console.log(titleEl.parentNode);
// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// const divEl = document.querySelector("div.card");
// console.log(divEl);
// const pEl = document.createElement("p");
// console.log(pEl);
// pEl.innerHTML = "Привет";
// divEl.appendChild(pEl);

// 8. Удалите тег h6 на странице.
// const subtEl = document.querySelector("h6.card-subtitle");
// console.log(subtEl);
// subtEl.remove();
