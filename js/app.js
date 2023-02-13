'use strict'
// Lesson 28

//Task 1

// function count(expression){
//   function getValues(expression){
//       let values = [...expression]
//       return values;
//   }
//       let values = getValues(expression);
//       switch (values[1]) {
//     case '+': 
//      return  showResult(sum(values));
//     case '-':
//      return  showResult(subtract(values));
//     case '*':
//      return  showResult(multiply(values));
//     case '/':
//      return showResult(divide(values))
//  }
//  function showResult(value){
//      return value
//  }
// }
// function sum(values) {
//   return +values[1] + +values[2];
// }
// function subtract(values) {
//   return values[1] - values[2];
// }
// function multiply(values) {
//   return values[1] * values[2];
// }
// function divide(values) {
//   return values[1] / values[2];
// }



//Task 2
function count(expression){
  function getValues(data){
     let values = [...data]
     return values;
  }
  let values = getValues(expression);
  switch (values[1]) {
      case '+': 
       return  showResult(sum(values));
      case '-':
       return  showResult(subtract(values));
      case '*':
       return  showResult(multiply(values));
      case '/':
       return showResult(divide(values))
   }
   function showResult(value){
       return value
   }
}

function sum(values) {
  return +values[0] + +values[2];
}
function subtract(values) {
  return values[0] - values[2];
}
function multiply(values) {
  return values[0] * values[2];
}

function divide(values) {
  try{
  if (values[2] === "0") {
   console.log(values[2])
   throw new Error('Can\'t divide by 0');
  } else 
    return values[0] / values[2];
  }
  catch(error){
  console.log(`${error.name}: ${error.message}`)
      }
    }


try {
  count('5/0')
}
catch(error){
  console.log('System error, we are doing our best to solve the problem')
};


//Task 3


// function count(expression){
//   function getValues(expression){
//       let values = [...expression]
//       return values;
//   }
//       let values;
//       try{
//         let data = Values(expression);//*
//         data = values
//       }catch(error){
//         console.log(error.name + ': ' + error.message)//**
//         values = [0, '+', 0]
//       }
//       switch (values[1]) {
//     case '+': 
//      return  showResult(sum(values));
//     case '-':
//      return  showResult(subtract(values));
//     case '*':
//      return  showResult(multiply(values));
//     case '/':
//      return showResult(divide(values))
//  }
//  function showResult(value){
//      return value
//  }
// }
// function sum(values) {
//   return +values[0] + +values[2];
// }
// function subtract(values) {
//   return +values[0] - +values[2];
// }
// function multiply(values) {
//   return +values[0] * +values[2];
// }
// function divide(values) {
//   return +values[0] / +values[2];
// }







//Task 4


function MakeUsers(name, age){
  this.name = name;
  this.age = age;
}

let userAge = prompt("Enter your age", 0);
let user = new MakeUsers('Mike', userAge);

function showMovie (user){
  try{
      if(user.age === null){
         throw new SyntaxError('You didn\'t enter your age');
      }
      if (user.age === undefined){
         throw new SyntaxError('Age not determined');
      }
      if(user.age >= 18){
          return 'You can watch this movie';
      } else {
          return 'Sorry, you are too young';
  }
  } catch(error){
    if(error.message === 'You didn\'t enter your age' || 'Age not determined'){
      user.age = prompt("Please enter your age", 0);
      return error.name + ': ' + error.message;
    }
          
  } finally {
      console.log('Welcome to our site');
  }
}

function message(message) {
  console.log(message);
}


try{
message(showMovie(user));
}catch(error){
  console.log(error.name + ': ' + error.message)
}