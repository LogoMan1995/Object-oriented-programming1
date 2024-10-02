//Наследование — это один из основных принципов объектно-ориентированного программирования (ООП), позволяющий создавать новые объекты на основе уже существующих. 



function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.getInfo = function () {
    return `${this.make} ${this.model} ${this.year}`
}


function Car(make, model, year, doors) {
    Vehicle.call(this, make, model, year);
    this.doors = doors
}

Car.prototype = Object.create(Vehicle);
Car.prototype.constructor = Car;

Car.prototype.getInfo = function () {
    return `${this.make} ${this.model} ${this.year} ${this.doors}`
}


let autoCar = new Car(" Toyota", "Camry", 2020, "4 doors");
console.log(autoCar.getInfo())





function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getInfo = function () {
    return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`;
}

function EBook(title, author, year, fileSize) {
    Book.call(this, title, author, year);
    this.fileSize = fileSize;
}


EBook.prototype = Object.create(Book.prototype);
EBook.prototype.constructor = EBook;


EBook.prototype.getInfo = function () {
    return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}, Размер: ${this.fileSize}`;
}


let library = new EBook("Мастер и Маргарита", "Булгаков", 1967, "2 МБ");

console.log(library.getInfo());







function Movie(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
}


Movie.prototype.getInfo = function () {
    return `Название: ${this.title}, Режиссер: ${this.director}, Год: ${this.year}`
}


function Documentary(title, director, year, topic) {
    Movie.call(this, title, director, year);
    this.topic = topic;
}

Documentary.prototype = Object.create(Movie.prototype);
Documentary.prototype.constructor = Documentary;


Documentary.prototype.getInfo = function () {
    return `Название: ${this.title}, Режиссер: ${this.director}, Год: ${this.year}, Тема: ${this.topic}`
}

let film = new Documentary("Планета Земля", "Смит", 2006, "Природа")
console.log(film.getInfo())



//Инкапсуляция — это один из основных принципов объектно-ориентированного программирования, который подразумевает сокрытие внутреннего состояния объекта и предоставление доступа к этому состоянию только через публичные методы.


function createPerson(name, age) {
    let user = {
        name,
        age
    };

    return {
        getName: function () {
            return user.name; 
        },
        getAge: function () {
            return user.age; 
        },
        setAge: function (n) {
            if (n >= 0) { 
                user.age = n; 
            } else {
                console.log("Возраст не может быть отрицательным");
            }
        }
    };
}

let person = createPerson("David", 28); 
console.log(person.getName()); 
console.log(person.getAge());  
person.setAge(30); 
console.log(person.getAge());  
person.setAge(-5); 







function Bank() {
    let balance = 0; 

    this.deposit = function (amount) {
        if (amount > 0) {
            balance += amount; 
        } else {
            console.log("Сумма должна быть положительной для внесения.");
        }
    };

   
    this.withdraw = function (amount) {
        if (amount > 0) {
            if (balance >= amount) { 
                balance -= amount; 
            } else {
                console.log("Недостаточно средств для снятия.");
            }
        } else {
            console.log("Сумма должна быть положительной для снятия.");
        }
    };

    this.getBalance = function () {
        return balance; 
    };
}


let myAccount = new Bank();

myAccount.deposit(1000); 
myAccount.deposit(500);   
myAccount.withdraw(300);  
myAccount.withdraw(1500); 
console.log(myAccount.getBalance()); 







//Полиморфизм — это концепция, которая позволяет объектам разных классов обрабатывать одно и то же сообщение (вызов метода) по-разному. 


function Shape() {}

Shape.prototype.area = function () {
    throw new Error("Метод 'area()' должен быть переопределен");
};

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
    return Math.PI * this.radius ** 2;
};

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
    return this.width * this.height;
};

function printArea(shape) {
    console.log(`Площадь: ${shape.area()}`);
}


const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);


printArea(circle);    
printArea(rectangle); 






