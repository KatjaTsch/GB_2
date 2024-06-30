const product = {
  name: "smartphone",
  price: 500,
  getDiscription(discount) {
    const finalPrice = this.price - discount;
    return `Товар ${this.name} со скидкой стоит ${finalPrice}`;
  },
};

function calculateDiscount(procent) {
  return (this.price * procent) / 100;
}

const productDiscount = calculateDiscount.call(product, 30);
console.log(productDiscount);

const productDiscount2 = calculateDiscount.apply(product, [50]);
console.log(productDiscount2);

const discriptionDiscount = product.getDiscription.call(
  product,
  productDiscount
);
console.log(discriptionDiscount);
// ***********************************************************************************
// ***********************************************************************************
// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.
function getPrototypeChain(obj) {
  const parents = [];
  while (obj !== null) {
    parents.push(obj);
    obj = Object.getPrototypeOf(obj);
  }
  return parents;
}
console.log(getPrototypeChain({ a: 1 }));
// ***********************************************************************************
// ***********************************************************************************
// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} издаёт звук`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  fetch() {
    console.log(
      `Собака породы ${this.breed} по кличке ${this.name} принесла мяч.`
    );
  }
}

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.

const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч
// ***********************************************************************************
// ***********************************************************************************
// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

class User {
  #name;
  #age;
  #email;
  static #maxAge = 99;
  constructor(name, age, email) {
    this.#name = name;
    this.#age = age;
    this.#email = email;
    if (age > User.#maxAge) {
      throw new Error("возраст недопустим");
    }
  }
  setName(newName) {
    this.#name = newName;
  }
  setAge(newAge) {
    if (newAge > User.#maxAge) {
      throw new Error("возраст недопустим");
    }
    this.#age = newAge;
  }
  setEmail(newEmail) {
    this.#email = newEmail;
  }
  getInfo() {
    console.log(`информация: ${this.#name}, ${this.#age}, ${this.#email}`);
  }
}
const vasya = new User("Vasya", 25, "vas@MediaList.ru");
vasya.getInfo();

vasya.setName("Anton");
vasya.getInfo();

vasya.setAge(15);
vasya.getInfo();

vasya.setEmail("ant@ant.ru");
vasya.getInfo();
// ***********************************************************************************
// ***********************************************************************************
// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.
class Product {
  #name;
  #price;
  #quantity;
  static maxQuantity = 10;
  constructor(name, price, quantity) {
    this.#name = name;
    this.#price = price;
    if (quantity > Product.maxQuantity) {
      throw new Error("количество товара превышено");
    }
    this.#quantity = quantity;
  }
  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }
  get quantity() {
    return this.#quantity;
  }
  set name(newName) {
    this.#name = newName;
  }
}

const phone = new Product("Samsung", 1200, 9);
phone.name;
console.log(phone.name);

phone.name = "iphone";
console.log(phone.name);

// ***********************************************************************************
// ***********************************************************************************
