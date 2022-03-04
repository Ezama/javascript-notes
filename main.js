//document.write("Hello EDU!");

//console.log("Welcome to Javascript");

//This is a comment

//Variables
let oddNumber = 5;
/*console.log(oddNumber);
document.write(oddNumber);*/

//Naming variables - camelCase
const pI = 3.14; 

//data types 

let evenNumber = "2";

let male = true;

let homeLocation = "";

//console.log(typeof homeLocation);

/*var person = {
    personName = "Elliot",
    age = 25
};*/

//numbers
let a = 1;
let b = 2;
let c = a + b;

//console.log(a + b);
//console.log(a += b);
//console.log(b - a);


let firstName = "John";
let lastName = "Mukasa";

//console.log(firstName + " " + lastName);
//console.log("Bosco" + " " + "Mark");



//console.log(length * width + " cm" );

//Functions
function greeting() {
    console.log("function greeting EDU");
    document.write("function greeting EDU");
}
//greeting();



function calculateArea() {
    console.log(length * width);

}
//calculateArea();

function calculateVolume() {
    let height = 60;
    let measurement = " cm";
    return length * width * height + measurement;
}
//console.log(calculateVolume());

//functions with parameters
function greeting(greetingMessage) {
    console.log(greetingMessage);
    document.write(greetingMessage);
}
/*greeting("Hello EDU");
greeting(10);
greeting(true);*/

/*let length = 30;
let width = 10;
let height = 60;*/

function calculateNewVolume(length, width, height, measurement) {
    return length * width * height + measurement;
}

console.log(calculateNewVolume(10, 10, 10, " cm"));
console.log(calculateNewVolume(20, 20, 20, " cm"));

















