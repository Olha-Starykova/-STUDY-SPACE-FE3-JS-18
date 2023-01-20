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

// let firstMonth = prompt("Enter fierst month salary", '1');
// let secondtMonth = prompt("Enter second month salary", '2');
// let sum = +firstMonth + +secondtMonth
// alert(`Your salary for 2 month is:  ${sum}$`);

//Task 2


// alert(`Your have extra bonus! Your total salary was: ${sum}$  It's increase for 1$ and now it is: ${++sum}$`);

//Task 3
// let sumBonus = +firstMonth + +secondtMonth + 1;
// alert(`Will you work next? ${sumBonus >= 2000}  `);

//Task 4
// ((sumBonus >= 2000) && !alert(`I'm ready to work`)) || !alert(`I'm out`);


// if (sumBonus >= 2000) {
//       alert(`I'm ready to work`) 
// } else {
//    alert(`I'm out`) 
// } 

// console.log(sumBonus >= 2000);

