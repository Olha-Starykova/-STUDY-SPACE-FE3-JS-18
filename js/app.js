'use strict'
// Lesson 24

//Task 1

// class User{
//   #name;
//   constructor(name, login, age){
//     this.#name = name;
//     this.login = login;
//     this.age = age;
//   }
// }

// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);

// console.log(user1.login);//MK_18;
// console.log(user1.age);//18;
// console.log(user2.login);//NRG;
// console.log(user2.age);//22;
// console.log(user2);//22;

//Task 2

// class User{
//   #name;
//   constructor(name, login, age){
//     this.#name = name;
//     this.login = login;
//     this.age = age;
//   }
// getName(isAdmin){
// switch(isAdmin){
//   case true:
//    return this.#name ? this.#name : this.login;
//   case false:
//     return `Permission denied`;    
//     };
//   };
// };

// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);

// console.log(user1.getName(true)) //Mike
// console.log(user2.getName(true)) //NRG
// console.log(user2.getName(false)) //Permission denied


//Task 3

class User{
  #name;
  constructor(name, login, age){
    this.#name = name;
    this.login = login;
    this.age = age;
  }
    getName(isAdmin){
    switch(isAdmin){
      case true:
      return this.#name ? this.#name : this.login;
      case false:
        return `Permission denied`;    
        };
      };

    changeName(newname){
      let password = prompt("Enter your password", 123);

      if(+password === 123){
        console.log( `Name Changed from ${this.#name} to ${newname}`);
        this.#name = newname;
      } else {
        console.log(`Permission denied`);   
      }
    }
};

  let user1 = new User('Mike', 'MK_18', 18);  
  user1.changeName('Bill', '123'); //Name Changed from Mike to Bill


//Task 5

class UserNew{
  #phone;
  constructor(name, phone){
    this.#phone = phone;
    this.name = name;
  };
  getPhone(isAdmin){
    let arr = this.#phone.split('-');
    arr.splice(1, 2, "******");
    let str = arr.join('-'); 
   
    return isAdmin ? this.#phone : str;
  }
};

let user3 = new UserNew('Mike', '067-888-88-99');
let user4 = new UserNew('Tom', '099-888-88-99');

console.log(user3.getPhone(false))//067-******-99
console.log(user4.getPhone(false))//099-******-99
console.log(user3.getPhone(true))//067-888-88-99
console.log(user4.getPhone(true))//067-888-88-99


