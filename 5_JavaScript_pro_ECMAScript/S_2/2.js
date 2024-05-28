// Задание 1 (тайминг 20 минут)
// 1. Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");
// ************************************************************************************
// const Person = {
//   name: "...",
//   age: "...",
//   gender: "...",

//   changeName: function (newName) {
//     this.name = newName;
//   },
//   changeAge: function (newAge) {
//     this.age = newAge;
//   },
//   changeGender: function (newGender) {
//     this.gender = newGender;
//   },
//   introduce: function () {
//     return `My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`;
//   },
// };

// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.gender);

// Person.changeName("Kate");
// Person.changeAge("27");
// Person.changeGender("male");

// console.log(Person.introduce());
// ************************************************************************************
// ************************************************************************************
// Задание 2 (20минут)
// 1. Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating
// ************************************************************************************
// const Animal = {
//   name: "anim",
//   eat: function () {
//     return `${this.name} ест`;
//   },
// };

// const Dog = {
//   name: "...",
//   bark() {
//     return `${this.name} лает`;
//   },
// };

// Dog.name = "Rex";
// Dog.eat = Animal.eat; // т.е. присвоили свойство объекта "Animal" объекту "Dog"
// console.log(Dog);
// console.log(Dog.eat());
// ************************************************************************************
// ************************************************************************************
// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
// ************************************************************************************
// const Calculator = {
//   add(num1, num2) {
//     return num1 + num2;
//   },
//   subtract(num1, num2) {
//     return num1 - num2;
//   },
//   multiply(num1, num2) {
//     return num1 * num2;
//   },
// };

// console.log(Calculator.add.call(null, 5, 3)); // Вывод: 8. "Ставится "null", т.к. какой-либо другой контекст отсутствует. Т.е. это ссылка на объект"
// console.log(Calculator.subtract.apply(null, [5, 3])); // Вывод: 2
// ************************************************************************************
// ************************************************************************************
// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.
// ************************************************************************************
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `My name is ${this.name} and I'm ${this.age} years old.`;
  }
}

const Ivan = new Person("Ivan", 18);
console.log(Ivan.name);
console.log(Ivan.age);
console.log(Ivan.introduce());
console.log(Ivan);
// ************************************************************************************
// ************************************************************************************
// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`
    );
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`
      );
    } else {
      console.log(`Insufficient funds in account ${this.balance}`);
    }
  }
}

const account1 = new BankAccount("123456", 10000);
console.log(account1);
console.log(account1.deposit(500));
console.log(account1.withdraw(4000));
console.log(account1.withdraw(20000));

