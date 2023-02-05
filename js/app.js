'use strict'
// Lesson 25

//Task 1

let user = {};

Object.defineProperties(user, {
  'name': {
    value: 'Max',
    enumerable: true,
    configurable: true,
  },
  'age': {
    value: 30,
    enumerable: true,
    configurable: true,
  },
  'id': {
    value: Math.random(),
    enumerable: true,
  }
})

console.log(Object.getOwnPropertyDescriptor(user, 'name'))//{value: 'Max', writable: false, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(user, 'age'))//{value: 30, writable: false, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(user, 'id'))//{value: 0.8676334570075539, writable: false, enumerable: true, configurable: false}

// //Task 2

let dataBase = {
  dbName: 'user',
  dbTape: 'MySQL'
};

let configurateDB ={
  token: '123',
  password: '567',
  user: 'admin'
};

Object.freeze(dataBase);
console.log(Object.isFrozen(dataBase)) // true
Object.seal(configurateDB);
console.log(Object.isSealed(configurateDB)) // true


//Task 3

let salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000,
};

Object.defineProperty(salaries,'addSalaries', {
  set (value){
   
    value.map(e => {
    let userInfo = e.split(': ')
    
   switch(userInfo[0]){
      case 'frontend':
      this.frontend = +userInfo[1] 
      case 'backend':
      this.backend = +userInfo[1]  
      case 'design':
      this.design = +userInfo[1]  
      default:
      this[userInfo[0]] = +userInfo[1] ;
  }
    })
  }
} )


Object.defineProperty(salaries, 'sum', {
  get (){
      let sum = 0;
      for(let salary in this){
          sum += this[salary];
      }
      console.log(sum);
  },
  enumerable: false,

})

 salaries.sum //4500
 salaries.addSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800'];
 salaries.sum //6350
 salaries.addSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800', 'boss: 3000'];
 salaries.sum //9350
 console.log(salaries)// {frontend: 2500, backend: 1750, design: 1300, manager: 800, boss: 3000}

//Task 4

let userNew = {
  name: 'Mike',
  surname: 'Davis',
  age: 25,
}
 
Object.defineProperty(userNew, 'userInfo', {
  get (){
    const arr = [];
    for (let key in userNew){
      arr.push(`${key}: ${userNew[key]}`)
    }
    console.log(arr.join(', '))

  }, 
  enumerable: false,
})

userNew.userInfo; // name: Mike, surname: Davis, age: 25
userNew.login = "MK_18"
userNew.userInfo; // name: Mike, surname: Davis, age: 25, login: MK_18

