'use strict'
// Lesson 26

//Task 1


let car = {
  type: 'electric',
  wheels: 4,
}

let sportCar = {
  doors: 2,
}

Object.setPrototypeOf(sportCar, car);
// console.log(sportCar.type) // electric
console.log(Object.getPrototypeOf(sportCar) === car);//true

let passengerCar = Object.create(car)  
passengerCar.doors = 4;

console.log(passengerCar.type)// electric

let toyCar = Object.create(sportCar)
toyCar.type = 'toy'
console.log(Object.getPrototypeOf(toyCar) === sportCar);//true
console.log(Object.getPrototypeOf(sportCar) === car);//true
console.log(toyCar.type)//toy
console.log(toyCar.wheels)//4
console.log(toyCar.doors)//2

//Task 2

let employees = {
  pay(munth, sum){
    this.wallet[munth] = sum;
    }
};

let frontendDeveloper = {
  name: 'Mike',
  wallet: {},
}
Object.setPrototypeOf(frontendDeveloper, employees)

let beckendDeveloper = {
  name: 'Bob',
  wallet: {},
};

Object.setPrototypeOf(beckendDeveloper, employees)
beckendDeveloper.pay('june', 1500);

console.log(beckendDeveloper.wallet.june); //1500
console.log(frontendDeveloper.wallet.june); //undefined

//Task 3

function User(name, age){
  this.name = name;
  this.age = age;
};

let user_1 = new User('Mike', 18)
let user_2 = new user_1.constructor('Bob', 25)

console.log(user_1)//User {name: 'Mike', age: 18}
console.log(user_2)//User {name: 'Bob', age: 25}

//Task 4

function UserType(name){
  for(let i =0; i < name.length; ++i){
    this[i] = name[i];
    this.join = Array.prototype.join;
    if(i + 1 == name.length){
      Object.defineProperty(this, 'length', {
        value: i + 1,
        writable: false,
        enumerable: true,
        configurable: true,
      });
    }
  }
};

let admins = new UserType(['Mike', 'Bob', 'Nikola']);
console.log(admins.join('; ')); //Mike; Bob; Nikola
