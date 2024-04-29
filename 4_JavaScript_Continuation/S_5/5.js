// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из
// файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных
// ***********************************************************************
// console.log(dataInfo);
// console.log(JSON.parse(dataInfo));
const parseResult = JSON.parse(dataInfo);
// console.log(parseResult);
const containerEl = document.querySelector("div.container");
console.log(containerEl);

parseResult.forEach((element) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add(element.class);
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", element.url);
  imgEl.setAttribute("width", element.width);
  imgEl.setAttribute("hight", element.hight);

  const pEl = document.createElement("p");
  pEl.innerHTML = element.text;

  newDiv.appendChild(imgEl);
  newDiv.appendChild(pEl);
  containerEl.appendChild(newDiv);
});

// ***********************************************************************
// ***********************************************************************

// ***********************************************************************

// ***********************************************************************
// ***********************************************************************
