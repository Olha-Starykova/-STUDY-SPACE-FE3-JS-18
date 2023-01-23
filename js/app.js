'use strict'
// Lesson 21

//Task 1 

let car = {
    model: 'Audi',
    year: 2020,
    color: 'red',
};

car.color = 'black';
car.type = 'electric';

function signal() {
    // alert('fa! fa!');
  }
  
car.signal = signal;

 console.log(car.signal());
console.log(car)

//Task 2 ========================================================================================
let sum = 0;
let salaries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay(){
        alert('We must pay salary on Tuesday!');
    },
    total(){
        for (let key in salaries) {
                if (typeof salaries[key] === 'number') {
                   sum += salaries[key];
                }
              }
        return console.log(`Total salary ${sum}$`)
    }
};

salaries.manager = 5000;
salaries.total();

//Task 3 ========================================================================================

// function CreateObj(brand, system, cost){
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
// }

// let dell = new CreateObj('Dell', 'windows', 800,);
// let apple = new CreateObj('Apple', 'MAC OS', 1700,);

// console.log(dell);
// console.log(apple);

//Task 4 ========================================================================================

function CreateObj(brand, system, cost){
    this.brand = brand;
    this.system = system;
    this.cost = cost;
    this[Symbol.toPrimitive] = function (hint){
    switch(hint){
                case 'string':
                    return this.brand 
                case 'number':
                    return this.cost
                case 'default':
                    return this.brand + ' ' + this.system  + ' ' + this.cost  + ' ' + '//'+ ' '
        }
    }
}

let dell = new CreateObj('Dell', 'windows', 800,);
let apple = new CreateObj('Apple', 'MAC OS', 1700,);

console.log(String(dell)); //Dell
console.log(+apple); //1700
console.log(dell + apple); // Dell windows 800 // Aplle MAC OS 1700 //

//Task 5 ========================================================================================
// Написати функцію, яка отримує на вхід два числа.  Якщо обидва числа парні - функція повертає одне число помножене на інше.  Якщо обидва числа непарні – функція повертає їхню суму.  Якщо одне з чисел парне, а друге непарне - функція повертає непарне число.

let calculation = 0;
function calcNumber(a, b) {
    if ((((a % 2) === 0 ) && ((b % 2)) === 0 )) {
        calculation = a * b
        console.log(calculation);
    }
     else if ((((a % 2) !== 0 ) && ((b % 2)) !== 0 )) {
        calculation = a + b
        console.log(calculation);
    }
    else if ((a % 2) !== 0 ) {
        console.log(a) 
    } else
    console.log(b)
};

calcNumber(1, 2);
calcNumber(2, 1);
calcNumber(4, 4);
calcNumber(5, 5);

//Task 6 ========================================================================================

//  Створіть об‘єкт зі списком задач, де ключ - ім‘я того, хто додає задачу, значення - ще один об‘єкт, який містить у собі 2 пари ключ-значення: статус і текст задачі. Додайте декілька prompt, щоб дати можливість користувачу додавати задачі в об‘єкт
// Приклад об‘єкту:
// const tasks = {
//   Anna: {
//     status: 'new',
//     text: 'Create checkout page'
//   }, 
//   Ihor: {
//     status: 'done',
//     text: 'Add styles to header'
//   } 
// }

let addNameFirst = prompt("Enter your name", 'Anna');
let addStatusFirst = prompt("Enter your status", 'new');
let addTextFirst = prompt("Enter your text", 'Create checkout page');

let addNameSecond = prompt("Enter your name", 'Ihor');
let addStatusSecond = prompt("Enter your status", 'done');
let addTextSecond = prompt("Enter your text", 'Add styles to header');


function User(nameFirst, statusFirst, textFirst,nameSecond, statusSecond, textSecond){
    this[nameFirst] = {
        statusFirst,
        textFirst,
    },
    this[nameSecond] = {
        statusSecond,
        textSecond,
    };
};

let tasks = new User(addNameFirst, addStatusFirst, addTextFirst, addNameSecond, addStatusSecond, addTextSecond);

console.log(tasks);



