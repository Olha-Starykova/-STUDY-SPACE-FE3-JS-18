'use strict'

// Lesson 20
//Task 1
// let firstUserNumber = prompt("Insert the first number", 0);
// let secondUserNumber = prompt("Insert the second number", 0);

// let firstNumber = Number(firstUserNumber);
// let secondNumber = Number(secondUserNumber);

// function maxNumber (a, b) {
//     if (a > b) {
//         return alert(`Greater number ${a}`);
//     }
//     if (a < b) {
//         return alert(`Greater number ${b}`);
//     }
//     if (a = b) {
//         return alert(`The numbers are equal ${a} = ${b}`);
//     }
//     return alert(`You lose`);
// };

// maxNumber(firstNumber, secondNumber);


//Task 2

//  let enterUserNumber = prompt("Enter the numder", 1);
//  let enterNumber = Number(enterUserNumber);
//  let reversNumber = 0;

// function revers (enterNumber) {
//     reversNumber = enterNumber*(-1);
//     return alert(reversNumber);
// }

// revers(enterNumber);

//Task 3
// let numberUser = prompt("Insert the number", 1);
// let number = Number(numberUser);

// let countUser = prompt("Insert the count", 1);
// let count = Number(countUser);

// let element = 0;
// function calcTotalCount (number, count) {
//     for (let i = 1; i <= count; i++) {
//          element = (number + 3)*i;
//     }
//     return (`Total count ${element}`) ;
// };

// alert (calcTotalCount(number, count));

//Task 4

let kmUser = prompt("Insert the distance", 1);
let km = Number(kmUser);
console.log(km)

let metricUser = prompt('Insert the metric', " ");
let metric = String (metricUser);
console.log(metric)

function getMetric(metric, km, m = 1, cm = 1) {
    if (metric === 'm') {
        console.log(`это km  ${km}`)
        console.log(`это metric  ${metric}`)
           kmToMeter(km)
    };
    if (metric === 'cm') {
          kmToCm(km)
    }
  
} 

function kmToMeter(km) {
    let resalt = km*1000
    console.log(`это km col ${km}`)
    console.log(`это metric col ${metric}`)
    return  alert(`${km} is ${resalt}`)
}

function kmToCm(km) {
    let resalt = km*100000
    return alert(`${km} is ${resalt}`)

}
alert(getMetric(metric, km))
