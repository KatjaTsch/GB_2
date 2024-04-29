// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

// console.log(dataInfo);
const containerEl = document.querySelector("div.container");
console.log(containerEl);

const parseResult = JSON.parse(dataInfo);

parseResult.forEach((element) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add(element.class);
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", element.url);
  imgEl.setAttribute("width", element.width);
  imgEl.setAttribute("hight", element.hight);

  const pEl = document.createElement("p");
  pEl.innerHTML = element.text;

  const h1El = document.createElement("h1");
  h1El.innerHTML = element.h1;

  newDiv.appendChild(imgEl);
  newDiv.appendChild(pEl);
  newDiv.appendChild(h1El);
  containerEl.appendChild(newDiv)
});
