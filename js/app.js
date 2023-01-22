// // Lesson 18

// //Task 1
// let firstMonth = prompt("Enter fierst month salary", '1');
// let secondtMonth = prompt("Enter second month salary", '2');
// let sum = +firstMonth + +secondtMonth
// alert(`Your salary for 2 month is:  ${sum}$`);

// //Task 2
// alert(`Your have extra bonus! Your total salary was: ${sum}$  It's increase for 1$ and now it is: ${++sum}$`);

// //Task 3
// let sumBonus = +firstMonth + +secondtMonth + 1;
// // alert(`Will you work next? ${sumBonus >= 2000}  `);

// //Task 4
// ((sumBonus >= 2000) && !alert(`I'm ready to work`)) || !alert(`I'm out`);


// // if (sumBonus >= 2000) {
// //       alert(`I'm ready to work`) 
// // } else {
// //    alert(`I'm out`) 
// // } 

// console.log(sumBonus >= 2000);
//=======================================================================================================
//========================================================================================
 // Lesson 21

//Task 1 ========================================================================================

// let car = {
//     model: 'Audi',
//     year: 2020,
//     color: 'red',
// };

// car.color = 'black';
// car.type = 'electric';

// function signal() {
//     alert('fa! fa!');
//   }
  
// car.signal = signal;

// console.log(car.signal());
// console.log(car)

//Task 2 ========================================================================================
// let sum = 0;
// let salaries = {
//     frontend: 12000,
//     backend: 10000,
//     designer: 8000,
//     dayPay(){
//         alert('We must pay salary on Tuesday!');
//     },
//     total(){
//         for (let key in salaries) {
//                 if (typeof salaries[key] === 'number') {
//                    sum += salaries[key];
//                 }
//               }
//         return console.log(sum)
//     }
// };

// salaries.manager = 5000;
// salaries.total();

//Task 3 ========================================================================================

// function CreateObj(brand, system, cost){
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
// }

// let dell = new CreateObj('Dell', 'windows', 800,);
// let apple = new CreateObj('Apple', 'MAC OS', 1700,);

// console.log(dell);
// console.log(apple);

//Task 4 ========================================================================================

function CreateObj(brand, system, cost){
    this.brand = brand;
    this.system = system;
    this.cost = cost;
    this[Symbol.toPrimitive] = function (hint){
    switch(hint){
                case 'string':
                    return this.brand 
                case 'number':
                    return this.cost
                case 'default':
                    return this.brand + ' ' + this.system  + ' ' + this.cost  + ' ' + '//'+ ' '
        }
    }
}

let dell = new CreateObj('Dell', 'windows', 800,);
let apple = new CreateObj('Apple', 'MAC OS', 1700,);

console.log(String(dell)); //Dell
console.log(+apple); //1700
console.log(dell + apple); // Dell windows 800 // Aplle MAC OS 1700 //
console.log(+dell + +apple)

