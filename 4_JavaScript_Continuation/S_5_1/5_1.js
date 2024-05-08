const data = JSON.parse(dataJS);

const cartContainer = document.querySelector("div.conteinerCarts");

data.forEach((element) => {
  const tempEl = document.getElementById("cartTemlate");
  //   console.log(tempEl);
  //   console.log(element);
  const clone = tempEl.content.cloneNode(true);
  console.log(tempEl);
  clone.querySelector("img.cart__img").src = element.imgUrl;
  clone.querySelector("span.cart__name").innerHTML = element.name;
  clone.querySelector("span.cart__category").innerHTML = element.category;
  clone.querySelector("span.cart__priceSelect").innerHTML = element.price;
  clone.querySelector("span.cart__colorSelect").innerHTML = element.color;
  clone.querySelector("span.cart__sizeSelect").innerHTML = element.size;
  clone.querySelector("span.cart__quanitySelect").innerHTML = element.quantity;

  cartContainer.appendChild(clone);
});
