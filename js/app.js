'use strict'
// Lesson 36



// let data ='{"name": "Mike","age": 18,"isAdmin": false}';

// console.log(JSON.parse(data));

// let user ={name: 'mike', age: 18, isAdmin: false};

// console.log(JSON.stringify(user));//{"name":"mike","age":18,"isAdmin":false}

// fetch('http://127.0.0.1:5500/data.json')
// .then(response => response.json())
// .then(data => console.log(data));

// let user ={
//   name: 'Mike',
//   toJSON(){
//       return {"name": "unknow"}
//   }
// }
// let jsonUser = JSON.stringify(user);
// console.log(jsonUser);

// const user1 = {
//   name: 'Alex', 
//   age: 28,
//   country: 'USA'
// }

// const userProxy = new Proxy(user1, {
//   get(target, prop) {
//     console.log(target)
//     console.log(prop)
//     return `${target[prop]}-proxy`
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value;
//     } else {
//       throw new Error(`No ${prop} in object`)
//     }
//   }
// })

//  const log = text => `console log ${text}`;

// // function log2(text) {
// //   return `console log ${text}`;
// // } 

// const fnProxy = new Proxy(log, {
//   apply(target, _thisArgs, args) {
//     return target(args).toUpperCase();
//   }
// })

// let user ={name: 'Mike', age: 18, isAdmin: false};

// user = new Proxy(user, {
//     get(target, property) {
//         console.log(`Property "${property}" has been read.`);
//         return target[property];
//     }
// });

// console.log(user.name);//Property "name" has been read. 
// //Mike
// user.name = 'Bob'

// console.log(user.name);//Property "name" has been read. 
// //Bob


// let nikola = {firstName: 'Nikola', lastName: 'Tesla', age:18, isAdmin:true};
// let cookieName = 'admin';
// document.cookie = `${cookieName}=${JSON.stringify(nikola)}; path=/; expires=Tue, 15 Jan 2025 06:00:00 GMT;`


//Task 1

// fetch('http://127.0.0.1:5500/data.json')
// .then(response => response.json())
// .then(data => { data


//   function showAdminName(data){
//     for (let value of Object.values(data)) {
//     if(value.isAdmin){
//     return console.log(value.name)
//  }
// showAdminName(data)
//   }

//   }
 
// } 

// ); 

 
//  const obj = JSON.parse(data)

// console.log(obj)

//   user = new Proxy(user, {
//     get(target, property) {
//         console.log(`Property "${property}" has been read.`);
//         return target[property];
//     }
// });

//console.log(user.name);

// function showAdminName(data){
// console.log(data)
//  }

//Task 1

// let text = '{"mike":{"name": "Mike", "age": 18,"isAdmin": false },"bob":{   "name": "Bob","age": 32,"isAdmin":false },"nikola":{"name": "Nikola","age": 25,"isAdmin": true}}';

//  const data = JSON.parse(text);
//  //console.log(data)

//  function showAdminName(data){
//     for (let value of Object.values(data)) {
//     if(value.isAdmin){
//     return console.log(value.name)
//  }
//   }
//   }

// showAdminName(data)//Nikola
//Task 2

let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
let bob = {firstName: 'Bob'};
let mike = {lastName: 'Smith'};
let michael = {};

let getFullName = function(user){
  return `${user.firstName} ${user.lastName}`;
};

getFullName = new Proxy(getFullName,{
  apply(target, _thisArg, args) {
        for (let value of Object.values(args)) {
           if(value.firstName && value.lastName ){
            return  target(...args)
           } 
           if(value.firstName){
            return value.firstName
           }
           if(value.lastName){
            return value.lastName
           }
           return 'No Name';
  }}
});


console.log(getFullName(nikola));//Nikola Tesla
console.log(getFullName(bob));// Bob
console.log(getFullName(mike));// Smith
console.log(getFullName(michael));// No name


//Task 3



//Task 4

