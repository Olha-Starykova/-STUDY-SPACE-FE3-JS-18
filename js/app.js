//Task 1

 let age = prompt('How old are you?', 'age');
 let ageNumber = Number(age)


 let answer;
 if(ageNumber <= 17 && ageNumber > 0){
     answer = "Do you study at school?";
 } else if (ageNumber > 17 && ageNumber < 25){
     answer = "Do you study at university?";
 } else if (ageNumber >= 25 && ageNumber < 60){
     answer = "Do you have a job?";
 } else {
     answer = "What are you doing?";
 }
 console.log(confirm(answer));

//Task 2 
let display = prompt('Specify Display Values CSS', "block, flex, grid, inline, none")
switch(display){
    case 'block':
        alert("Set 'display: block;'");
        break;
    case 'flex':
        alert("Set 'display: flex;'");
        break;
    case 'grid':
        alert("Set 'display: grid;'");
        break;
    case 'inline':
        alert("Set 'display: inline;'" );
        break;
    case 'none':
        alert("Set 'display: none;'");
        break;
    default:
        alert("Set 'display: inline-block;'");
 }

 //Task 3

 let numberUser = prompt("Please enter the number", 1);
 let number = Number(numberUser);
 
 let multiplication = number*12;

(number > 0) && number ? alert(`${number} by 12 equals ${multiplication}`) : alert('Your number is incorect, please enter corect number');
 
//Task 4

for (let i = 1; i <= 50; i++) {
   if (i % 2 === 0){
    console.log(i);
   }
};


