//В JavaScript class — это синтаксический сахар для создания объектов и реализации объектно-ориентированного программирования. Он предоставляет более удобный и понятный способ работы с объектами по сравнению с традиционными функциями-конструкторами.

class AutoShop {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    buy() {
        return `I want to buy ${this.brand} ${this.model} ${this.price}`
    }
}

let want = new AutoShop("BMW", "M6", "50000$")
console.log(typeof want)
console.log(want)
console.log(want.buy())


class Movie {
    constructor(title, director, releaseYear) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
    }
    getDetails() {
        return `Название: ${this.title}, Режиссер: ${this.director}, Год выхода: ${this.releaseYear}`
    }
}

let cinema = new Movie("Годзилла vs. Конг", "Адам Вингард", 2021);
console.log(cinema.getDetails())
console.log(typeof cinema)
console.log("title" in cinema)
console.log(cinema.hasOwnProperty("director"))




//Геттеры: Позволяют получать значения свойств.Геттеры должны вызываться без круглых скобок, как свойства, а не как методы.

class Person {
    constructor(name, lastname) {
        this.__name = name;
        this.__lastname = lastname;
    }

    get getName() {
        return this.__name
    }

    get getLastName() {
        return this.__lastname
    }

    getInfo() {
        return `My name is ${this.__name} and my lastname is ${this.__lastname}`
    }
}

const person = new Person("David", "King");
console.log(person.getInfo())
console.log(person.getName)



class Book {
    constructor(title, author, year) {
        this.__title = title;
        this.__author = author;
        this.__year = year;
    }

    get getTitle() {
        return this.__title
    }
    get getAuthor() {
        return this.__author
    }
    get getYear() {
        return this.__year
    }
    getInfo() {
        return `${this.__title} ${this.__author} ${this.__year}`
    }
}


let myBook = new Book("1984", "George Orwell", 1949);
console.log(myBook.getInfo());
console.log(myBook.getTitle);
console.log(myBook.getAuthor);
console.log(myBook.getYear)






//Сеттеры — это специальные методы в классах, которые позволяют устанавливать значения приватных или защищённых свойств объекта. Они обеспечивают контроль над тем, как и какие данные могут быть назначены свойствам, что помогает поддерживать инкапсуляцию.


class Student {
    constructor(name, age, grades) {
        this.__name = name;
        this.__age = age;
        this.__grades = grades;
    }

    get name() {
        return this.__name;
    }

    get age() {
        return this.__age;
    }

    get grades() {
        return this.__grades;
    }

    set name(newName) {
        this.__name = newName;
    }

    set age(newAge) {
        this.__age = newAge;
    }

    getAverageGrade() {
        const total = this.__grades.reduce((a, b) => a + b, 0);
        return total / this.__grades.length;
    }

    getPerson() {
        return `Name: ${this.__name}, Age: ${this.__age}, Grades: ${this.__grades}`;
    }
}

let student = new Student("Alice", 20, [90, 85, 88]);
console.log(student);
console.log(student.getPerson());
student.name = "David";

console.log(student.getPerson());
console.log(student.getAverageGrade());



//Приватные свойства в классах JavaScript используются для инкапсуляции данных, что позволяет скрыть их от внешнего кода. Это достигается с помощью символа # перед именем свойства.

class User {
    #name;
    #lastname;
    #age;
    constructor(name, lastname, age) {
        this.#name = name;
        this.#lastname = lastname;
        this.#age = age;
    }

    getName() {
        return this.#name
    }
    getLastName() {
        return this.#lastname;
    }
    getAge() {
        return this.#age;
    }
}

let userProfile = new User("David", "King", 28)
console.log(userProfile.getName())


//extends позволяет дочерним классам наследовать методы (и свойства) от родительских классов.


class User1 {
    constructor(name) {
        this.name = name
    }
    speak() {
        return `Здравствуйте ${this.name}!`
    }
}

class Test extends User1 {
    constructor(name, age) {
        super(name)
        this.age = age;
    }
    hide() {
        return `Привет ${this.name} ?`
    }
}


const person1 = new Test("David", 28)
console.log(person1.speak())
console.log(person1.hide())




class Vehicle {
    constructor(make,model){
        this.make = make;
        this.model = model
    }
    describe(){
        return `Это ${this.make} ${this.model}`
    }
}


class Car extends Vehicle{
  constructor(make,model,year){
    super(make,model);
    this.year = year;
  }
getInfo(){
    return `Это ${this.make} ${this.model}, год выпуска ${this.year}`
}
}


const autoShop = new Car("BMW", "M6",2024)
console.log(autoShop.describe())
console.log(autoShop.getInfo())










class Animal {
    constructor(name){
        this.name = name;
    }
    makeSound(){
        return `Я ${this.name}, и я мяукаю`
    }
}


class Cat extends Animal{
    constructor(name,bread){
        super(name);
        this.bread = bread;
    }
    makeBread(){
        return `Я ${this.name}-${this.bread}`
    }
}

const cat = new Cat("Мурзик", "Британец");
console.log(cat.makeSound())
console.log(cat.makeBread())















