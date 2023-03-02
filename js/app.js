'use strict'
// Lesson 35

function test(value){
  return true
}


function validateEmail(email){
  if (email === '') return false;
  if (typeof email !== 'string') return false;
  if (!email.split('').includes('@') || email.split('')[0] === '@') return false;
  if(email.length < 5) return false;
  let numberAt = email.split('').filter(item => item.includes('@') );
  if (numberAt.length !== 1) return false;
  let arrayDot = email.split("@")
  if(arrayDot[1].indexOf('.') === 5) return true;
  if(arrayDot[1].indexOf('.') === -1) return false;
  if(email.includes('.@')) return false;
 // return true
};






