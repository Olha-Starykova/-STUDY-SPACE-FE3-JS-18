'use strict'

// Lesson 22

//Task 1 ==========================================================================================

let users = ['Mike', 'Nikola', 'Tom'];
console.log(users[2]) // Tom
users[1] = 'Alex';
console.log(users)// ['Mike', 'Alex', 'Tom']
users.splice(1, 2,)
console.log(users)// ['Mike']
console.log(users.length)// 1

//Task 2  ==========================================================================================

let a = [5, 3, -4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 5, 25];

function isComparison(a, b){
 if(a.length > b.length){
   console.log('Length a > b')
 };
 if(a.length < b.length){
    console.log('Length a < b')
  };
  if(a.length == b.length){
    console.log('Length a = b')
  };
};
isComparison(a ,b) // Length a > b

let totalComparisonArrA = 0;
let totalComparisonArrB = 0;

function isTotalComparison(a, b){
a.forEach(e => {totalComparisonArrA += e;
});
b.forEach(e => {totalComparisonArrB += e; 
});
if(totalComparisonArrA > totalComparisonArrB){
console.log(`${totalComparisonArrA} > ${totalComparisonArrB}`);
} else
if(totalComparisonArrA < totalComparisonArrB){
    console.log(`${totalComparisonArrA} < ${totalComparisonArrB}`);
};
if(totalComparisonArrA === totalComparisonArrB){
    console.log(`${totalComparisonArrAa} = ${totalComparisonArrB}`);
};
}

isTotalComparison(a, b) // 51 > 28


//Task 3  ==========================================================================================

let phrase = 'i am learning JavaScript right now';

 let arrPhrase = phrase.split(' ')
 console.log(arrPhrase) //  ['i', 'am', 'learning', 'JavaScript', 'right', 'now']

 //Task 4  ==========================================================================================

 let arrA = [5, 3, 8, 5, 3, 2, 1, 2];
 let arrB = [];

function arrGeneral(arr) {
    arr.forEach((item) => {
      if (!arrB.includes(item)) {
        arrB.push(item);
      }
    })
    return arrB;
  }
  
  console.log( arrGeneral(arrA) ); //  [5, 3, 8, 2, 1]


 //Task 5  ==========================================================================================

let usersAge = [
    {id: 1, age: 17},
    {id: 2, age: 18},
    {id: 3, age: 19},
    {id: 4, age: 21},
    {id: 5, age: 17},
    {id: 6, age: 20},
    {id: 7, age: 25},
];

let rezult = 0;

function selectionAge (arr){
rezult = arr.filter(e => {
    if(e.age > 18 && e.age < 21){ 
        console.log(e.id)
    }
})
};


selectionAge(usersAge); // 3, 6