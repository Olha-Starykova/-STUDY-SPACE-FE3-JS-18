// Lesson 18

//Task 1
let firstMonth = prompt("Enter fierst month salary", '1');
let secondtMonth = prompt("Enter second month salary", '2');
let sum = +firstMonth + +secondtMonth
alert(`Your salary for 2 month is:  ${sum}$`);

//Task 2
alert(`Your have extra bonus! Your total salary was: ${sum}$  It's increase for 1$ and now it is: ${++sum}$`);

//Task 3
let sumBonus = +firstMonth + +secondtMonth + 1;
//  alert(`Will you work next? ${sumBonus >= 2000}  `);

//Task 4
((sumBonus >= 2000) && !alert(`I'm ready to work`)) || !alert(`I'm out`);


// if (sumBonus >= 2000) {
//       alert(`I'm ready to work`) 
// } else {
//    alert(`I'm out`) 
// } 

// console.log(sumBonus >= 2000);


// ===================================

//Task 1

 let age = prompt('How old are you?', 'age');
 let ageNumber = Number(age)


 let answer;
 if(ageNumber <= 17){
     answer = "Do you study at school?";
 } else if (ageNumber > 17 && ageNumber < 25){
     answer = "Do you study at university?";
 } else if (ageNumber >= 25 && ageNumber < 60){
     answer = "Do you have a job?";
 } else {
     answer = "What are you doing?";
 }
 console.log(confirm(answer) );

//Task 2 
let display = prompt('Specify Display Values CSS', "block, flex, grid, inline, none")
switch(display){
    case 'block':
        alert('block');
        break;
    case 'flex':
        alert('flex');
        break;
    case 'grid':
        alert("grid" );
        break;
    case 'inline':
        alert('inline' );
        break;
    case 'none':
        alert('none');
        break;
    default:
        alert("Set 'display: inline-block;'");
 }

 //Task 3

 let numberUser = prompt("Please enter the number", 1);
 number = Number(numberUser);
 
 multiplication = number*12;

(number > 0) && number ? alert(`${number} by 12 equals ${multiplication}`) : alert('Your number is incorect, please enter corect number');
 
//Task 4

for (let i = 1; i <= 50; i++) {
   if (i % 2 === 0){
    console.log(i);
   }
};


