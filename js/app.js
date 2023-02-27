'use strict'

// Lesson 32

//Task 1

let mixin = {
  vat(){return 'wrong option'},
  exciseDuty(){return 'wrong option'},
  singleTax(){return 'wrong option'},
};


class Cola {
  constructor(brand, price){
    this.brand = brand;
    this.price = price;
  }
}// VAT 

Object.assign(Cola.prototype, mixin)
Cola.prototype.vat = function() {return (this.price * 0.2 + this.price)};

class Whiskey {
  constructor(brand, price){
    this.brand = brand;
    this.price = price;
  }
} // Whiskey
Object.assign(Whiskey.prototype, mixin)
Whiskey.prototype.exciseDuty = function() {return (this.price * 0.3 + this.price + 10)};

class Ice {
  constructor( price){
    this.price = price;
  }
} // single tax (+1)
Object.assign(Ice.prototype, mixin)
Ice.prototype.singleTax = function() {return (this.price + 1)};

let cocaCola = new Cola('Coca-Cola', 10);
let johnwalker = new Whiskey('john walker', 100);
let ice = new Ice(2);

console.log(cocaCola.vat()); //12
console.log(johnwalker.exciseDuty()); //140
console.log(ice.singleTax()); //3

//Task 2

function uniceString(text){
  let a = text.split("; ")
  let unique = new Set(a); 
return unique
}

console.log(uniceString("cherry; orange; cherry; banana; banana")) //Set(3) {'cherry', 'orange', 'banana'}



//Task 3

const list =  document.querySelectorAll("li")

let arr = []
let individual;
list.forEach(e => {
arr.push(e.innerHTML)
individual = new Set(arr); 
});

 console.log(individual);

  //Set(5) {'Iphone 13', 'Iphone 14', 'Samsung S21', 'Samsung S22', 'Iphone 14 ProMax'}
  
 
//Task 4


let userVisits = new Map();

function makeCounter(){
  let count = 0;
  return function(user){
    userVisits.set(user, ++count)
  }
}

let mikeVisits = makeCounter();
let bobVisit = makeCounter();
let nikolaVisit = makeCounter()

let mike = {name: "Mike", age: 18}
let bob = {name: "Bob", age: 25}
let nikola = {name: "Nikola", age: 32}

mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisit(bob);
nikolaVisit(nikola);
nikolaVisit(nikola);

console.log(userVisits.get(mike)); //3
console.log(userVisits.get(bob)); //1
console.log(userVisits.get(nikola)); //2
