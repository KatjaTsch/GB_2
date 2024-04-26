// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
// const inpEl = document.querySelector("input#from");
// console.log(inpEl);
// const spEl = document.querySelector("span.sp");
// console.log(spEl);
// inpEl.addEventListener("change", function (e) {
//   spEl.innerHTML = e.target.value;
// });
// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// const btnEl = document.querySelector("button.messageBtn");
// console.log(btnEl);
// const messEl = document.querySelector("div.message");
// console.log(messEl);

// btnEl.addEventListener("click", function (e) {
//   messEl.classList.add("animate_animated");
//   messEl.classList.add("animate_fadeInLeftBig");
//   messEl.style.visibility = 'visible';
// });

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const formEl = document.querySelector("form.form");
console.log(formEl);

const inpEl = formEl.querySelector("input.form-control");
console.log(inpEl);

const selectEl = formEl.querySelector("select.form-control");
console.log(selectEl);

const btnEl = formEl.querySelector("button.btn");
console.log(btnEl);

btnEl.addEventListener("click", function (e) {
  if (inpEl.value === "" || selectEl.value === "") {
    inpEl.classList.add("error");
  } else {
    inpEl.classList.remove("error");
  }
});
