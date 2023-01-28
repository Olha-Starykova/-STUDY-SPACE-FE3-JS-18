'use strict'
// // Lesson 23

// //Task 1

 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

// function sumArr(arr){
// arr.forEach(e => {
//   sum += e
// });
// return console.log(sum)
// };

function sumArr(arr, sum = 0, index = 0) {
	if (arr[index]) {
		return sumArr(arr, sum + arr[index], ++index)
	} 
		return console.log(sum);
};

sumArr(arr); // 55

// //Task 2 ================================================================

let count = 0;
let mass =[]

function deepCount(arr){
 for(var i = 0; i < arr.length; i++){
 mass.push(arr[i])
 count = mass.length 
if(Array.isArray(arr[i]))
{ 
  arr[i] = deepCount(arr[i]);
}
 }
 return count;
}

// console.log(deepCount([]))// 0
// console.log(deepCount([1, 2, 3]))// 3
// console.log(deepCount(["x", "y", ["z"]]))// 4
//console.log(deepCount([1, 2, [3, 4, [5]]]))// 7
  console.log(deepCount([[[[]]]]))// 3

  //Task 3 ================================================================

  const employees = {
    development: {
        backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
        frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
    },
    sales: {
        marketing: {
            internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
            promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
        },
        sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    },
    designer: [{name: 'Kate', salary: 1800}]
};

function takeSumSallary(startsum = 0){
let sum = startsum;

return function sumSallary(obj, ){
    for(let key in obj){
        if (Array.isArray(obj[key])){
            obj[key].forEach(employee => sum += employee.salary);
        } else {
            sumSallary(obj[key]);
        }
    }
    return sum;
}
};
// sumSallary(employees); //20100
let isPersonSalary = takeSumSallary()
console.log(isPersonSalary(employees)) // 20100

//Task 4 ================================================================

let arr1 = [2, 15, 7, 3];
let arr2 = [9, 3, 17, 12, 4, 8]
let arr3 = [6, 11, 16, 15, 11]


function isMaxNumber(arr){
  let maxNumber = Math.max(...arr);
  return console.log(maxNumber);

};

isMaxNumber(arr1); //15
isMaxNumber(arr2); //17
isMaxNumber(arr3); //16