// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

class Employee {
  constructor(name) {
    this.name = name;
  }
  displayInfo() {
    console.log(`Это сотрудник по имени ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
  displayInfo() {
    console.log(
      `Менеджер по имени ${this.name} из отдела "${this.department}"`
    );
  }
}

const emp1 = new Employee("Kate Minz");
emp1.displayInfo();

const manager = new Manager("Mark", "sales");
manager.displayInfo();

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Order {
  constructor(orderNumber, products) {
    this.orderNumber = orderNumber;
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  getTotalPrice() {
    let totalPrice = 0;
    for (let product of this.products) {
      totalPrice += product.price;
    }
    return totalPrice;
  }
}
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const order1 = new Order(123456);

const product1 = new Product("Samsung", 1200);
order1.addProduct(product1);
const product2 = new Product("iPhone", 1500);
order1.addProduct(product2);

console.log(order1.getTotalPrice());
