const data = JSON.parse(dataJS);

const cartContainer = document.querySelector("div.conteinerCarts");

data.forEach((element) => {
  const tempEl = document.getElementById("cartTemlate");
  const clone = tempEl.content.cloneNode(true);
  console.log(tempEl);
  clone.querySelector("img.cart__img").src = element.imgUrl;
  clone.querySelector("div.cart__title").innerHTML = element.name;
  clone.querySelector("span.cart__description").innerHTML = element.description;
  clone.querySelector("span.cart__price").innerHTML = element.price;
  cartContainer.appendChild(clone);
});
