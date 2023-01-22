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
    alert('fa! fa!');
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


