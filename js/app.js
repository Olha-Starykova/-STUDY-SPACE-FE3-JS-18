'use strict'

// Lesson 20
//Task 1
let firstUserNumber = prompt("Insert the first number", 0);
let secondUserNumber = prompt("Insert the second number", 0);

let firstNumber = Number(firstUserNumber);
let secondNumber = Number(secondUserNumber);

function maxNumber (a, b) {
    if (a > b) {
        return alert(`Greater number ${a}`);
    }
    if (a < b) {
        return alert(`Greater number ${b}`);
    }
    if (a = b) {
        return alert(`The numbers are equal ${a} = ${b}`);
    }
    return alert(`You lose`);
};

maxNumber(firstNumber, secondNumber);


//Task 2

 let enterUserNumber = prompt("Enter the numder", 1);
 let enterNumber = Number(enterUserNumber);
 let reversNumber = 0;

function revers (enterNumber) {
    reversNumber = enterNumber*(-1);
    return alert(reversNumber);
}

revers(enterNumber);

//Task 3
let numberUser = prompt("Insert the number", 1);
let number = Number(numberUser);

let countUser = prompt("Insert the count", 1);
let count = Number(countUser);

let element = 0;
function calcTotalCount (number, count) {
    for (let i = 1; i <= count; i++) {
         element = (number + 3)*i;
    }
    return (`Total count ${element}`);
};

alert (calcTotalCount(number, count));

//Task 4

let kmUser = prompt("Insert the distance, km", 1);
let km = Number(kmUser);

let metricUser = prompt('Insert the metric', "m, cm");
let metric = String (metricUser);

alert(getMetric(metric, km));

function getMetric(metric, km) {
    if (metric === 'm') {
          return kmToMeter(km)
    } else
    if (metric === 'cm') {
         return kmToCm(km)
    };
         return `Your game is over`
}; 

function kmToMeter(km) {
    let resalt = km*1000
    return  (`${km}km is ${resalt}m`)
};

function kmToCm(km) {
    let resalt = km*100000
    return (`${km}km is ${resalt}cm`)

};

