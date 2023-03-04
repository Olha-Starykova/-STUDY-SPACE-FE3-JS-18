'use strict'
// Lesson 36



//Task 1

let text = '{"mike":{"name": "Mike", "age": 18,"isAdmin": false },"bob":{   "name": "Bob","age": 32,"isAdmin":false },"nikola":{"name": "Nikola","age": 25,"isAdmin": true}}';

 const data = JSON.parse(text);
 //console.log(data)

 function showAdminName(data){
    for (let value of Object.values(data)) {
    if(value.isAdmin){
    return console.log(value.name)
 }
  }
  }

showAdminName(data)//Nikola

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

let users = [
  {name: 'Nikola', age: 18, id:1},
  {name: 'Bob', age: 25, id:2},
  {name: 'Mike', age: 32, id:3},
];


localStorage.setItem(users[0].name, JSON.stringify(users[0]))
localStorage.setItem(users[1].name, JSON.stringify(users[1]))
localStorage.setItem(users[2].name, JSON.stringify(users[2]))


 
function sayHelloToUser(id){
  //console.log(localStorage.key(id));

  let keys = Object.keys(localStorage);
  for(let key of keys) {
 let obj
    obj = JSON.parse(localStorage.getItem(key))
    if(obj.id === id)return console.log(`Hello: ${key}`)
}
};

//sayHelloToUser(3); //Hello: Mike

//Task 4

document.addEventListener('DOMContentLoaded', function() {
  let input = document.querySelector('[type="text"]');

  if (input) {
    input.value = localStorage.getItem("data") || "";

    input.addEventListener('input', function() {
      localStorage.setItem("data", this.value);
    });
    
  }
});