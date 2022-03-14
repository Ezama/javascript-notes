//Object Oriented Programming in JS - a programming paradigm/style centered around objects rather than functions
//4 pillars of OOP
//Encapsulation - grouping related variables and functions that operate on them into objects (reduce complexity + increase reusability)
//Abstraction - a way of hiding the implementation details and sharing only the functionality to the users (reduce complexity)
//Inheritance - enables you to define a class that takes all the functionality from a parent class and allows you to add more (code reusability + eliminate redundant code)
//Polymorphism - provides a way to perform a single action in different forms. It provides an ability to call the same method on different JS objects

//Objects 
//variables too, but can contain many values of different data types (W3schools)
//arbitrary collection of properties(EJS)
//properties - myString.length [key: value pairs] (what the object is/things that describe the object) 
//methods are simply properties than hold function values(EJS) - myString.toUpperCase() - [what the object does]
//when a JS variable is declared with the keyword 'new', the variable is created as an object 
//x = new String(); 
//example
// x = "string";
// x = new String();
// console.log(typeof x);
//avoid string, number and boolean objects. They complicate the code and slow down execution speed

//object example
// const person = {
//     firstName : "Nicholas",
//     lastName : "Kato",
//     age : 45,
//     fullName : function () {
//         return `${this.firstName} is the first name of ${this.lastName}`; 
//     }
// };

// //console.log(person.firstName);
// console.log(person.fullName());

//the 'this' keyword
//JavaScript keyword - part of the JavaScript library
//refers to the object in which it is called
//in the example above, 'this' refers to the person object. 
//this.firstName means the firstName property of the person object 
//when used alone, it refers to the global object (window)
//in a function, it refers to the global object 
//in 'strict mode', 'this' is undefined
//in an event, it refers to the element that received the event
//with arrow functions, the 'this' keyword always represents the object that defined the arrow function.



//Explicit function binding - call() and apply() methods
//predefined JS methods - work in similar ways
//call() - to call an object method with another object as the argument/parameter

// const person1 = {
//     fullName : function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// const person2 = {
//     firstName : "Nicholas",
//     lastName : "Kato"
// };

// //return "Nicholas Kato"
// //console.log(person1.fullName.call(person2));
// console.log(person1.fullName.apply(person2));

//'this' refers to person2 even if fullName is a method of person1

//Function Borrowing - bind() method
//an object can borrow a method from another object 

// const person = {
//     firstName : "Nicholas",
//     lastName : "Kato",
//     fullName : function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// //console.log(person.fullName());

// const member = {
//     firstName : "Lam-Lim",
//     lastName : "Toshin"
// }

// let fullName = person.fullName.bind(member);
// console.log(fullName()); 

//the member object borrows the fullName method from the person object


//constructors and prototypes - ES5
//constructors 
//a template for creation of objects
//a function from which objects can be created 
//it's good practice to Capitalise constructor names
//example
//constructor function

// function Vehicle(name, maker, year) {
//     this.name = name;
//     this.maker = maker;
//     this.year = year;
//     this.brandName = function () {
//         return `${this.name} ${this.maker} was made in ${this.year}`;
//     };
// }

// //Instatiate objects
// let car1 = new Vehicle("Ford", "Honda");
// let car2 = new Vehicle("Benz", "Mercedez");

// console.log(car1.name);
// console.log(car2.brandName());
// console.log(car1);

//prototypes
//another way to create objects
//make it easy to share functionality(as methods) btn different objects
//all constructors have a prototype property and we can add methods to it
//any method that we add to a constructor's prototype property will be available as a method to all objects created by that constructor
//example

// function Vehicle(name, maker, year) {
//     this.name = name;
//     this.maker = maker;
//     this.year = year;
// }

// //brandName method as a prototype
// Vehicle.prototype.brandName = function () {
//     return `${this.name} ${this.maker} was made in ${this.year}`;
// };

// //reverseBrandName method as a prototype
// Vehicle.prototype.reverseBrandName = function () {
//     return `in ${this.year}, ${this.maker} ${this.name} was made`;
// };

// //getAge as a prototype
// Vehicle.prototype.getAge = function () {
//     const years = new Date ().getFullYear() - this.year;
//     return years;
// }

// //Instatiate objects
// let car1 = new Vehicle("Ford", "Honda", 1998);
// let car2 = new Vehicle("Benz", "Mercedez", 2015);

// console.log(car1.brandName());
// console.log(car1.reverseBrandName());
// console.log(car2.brandName());
// console.log(car2.reverseBrandName());
// console.log(car1.getAge());

//prototype inheritance
//create an object called Bike and make it inherit the properties of the Vehicle object

//constructor
// function Vehicle(name, maker, year) {
//     this.name = name;
//     this.maker = maker;
//     this.year = year;
// }

// Vehicle.prototype.brandName = function () {
//     return `${this.name} ${this.maker} was made in ${this.year}`;
// };

// //Bike constructor
// function Bike(name, maker, year, month) {
//     Vehicle.call(this, name, maker, year);
//     this.month = month;
// }

// //Inherit prototype
// Bike.prototype = Object.create(Vehicle.prototype);

// //Instantiate Bike Object
// const bike1 = new Bike("BMW", "Volkswagen", 2017, "March");
// console.log(bike1);
// console.log(bike1.brandName());

//Object.create - another way of creating objects 
//first, we create an object of our prototypes

//object of prototypes
// const vehicleProtos = {
//         brandName : function () {
//             return `${this.name} ${this.maker} was made in ${this.year}`;
//         },
//         getAge : function () {
//                 const years = new Date ().getFullYear() - this.year;
//                 return years;
//             }
// }

// //create object 
// const car1 = Object.create(vehicleProtos);
// car1.name = "Ford";
// car1.maker = "Honda";
// car1.year = 2013;

// console.log(car1);

//JS Classes - ES6
//templates for objects - simpler way of creating objects
//static methods 
//no need to instantiate - called using the actual class name

//example
// class Vehicle {
//     constructor(name, maker, year) {
//         this.name = name;
//         this.maker = maker;
//         this.year = year;
//     }

//     brandName = function () {
//         return `${this.name} ${this.maker} was made in ${this.year}`;
//     };

//     reverseBrandName = function () {
//         return `in ${this.year}, ${this.maker} ${this.name} was made`;
//     };

//     getAge = function () {
//         const years = new Date().getFullYear() - this.year;
//         return years;
//     }

//     static topCarMaker() {
//         return "Tesla";
//     }
// }

// //Instantiate object
// const car1 = new Vehicle("Benz", "Mercedez", 2018);
// console.log(car1);
// console.log(car1.getAge());

// //calling a static method
// //console.log(car1.topCarMaker());
// console.log(Vehicle.topCarMaker());

//sub-classes
//simpler than prototype inheritance
//Bike subclass


//Polymorphism