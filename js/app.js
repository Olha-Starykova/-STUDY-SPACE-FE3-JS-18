'use strict'
// Lesson 29

//Task 1

// let h2 = document.querySelectorAll('h2')
// console.log(h2[1].innerHTML)

// h2[1].textContent = 'DOM method description'
// console.log(h2[1].innerHTML)

//Task 2

let ua = document.querySelectorAll('a')

function isUa(arr){
for (let i = 0; i < arr.length; i++){
let arrSplit   = arr[i].href.split('/')
for (let index = 0; index < arrSplit.length; index++) {
  const element = arrSplit [index];
if(arrSplit[index] === 'ua'){
let linkUa = arrSplit .join('/')
console.log(linkUa)
    }
  }
}
}
 isUa(ua)
//  http://127.0.0.1:5500/site.ua/ua/page_1
//  http://127.0.0.1:5500/site.ua/ua/page_2
//  http://127.0.0.1:5500/site.ua/ua/page_3

//Task 3

let list = document.querySelector('#ul');
console.log(list)

let firstLi = document.querySelector('#first');
console.log(firstLi)

let thirdLi = document.querySelector('#third')
console.log(thirdLi)

let liNull = document.createElement('li');
console.log(liNull)
liNull.setAttribute('id', 'null');
console.log(liNull.outerHTML);
liNull.innerHTML = 0;
list.prepend(liNull);

let liSecond = document.createElement('li');
console.log(liSecond)
liSecond.setAttribute('id', 'second');
console.log(liSecond.outerHTML);
liSecond.innerHTML = 2;
thirdLi.replaceWith(liSecond);

let nowLiThird = document.createElement('li');
nowLiThird.setAttribute('id', 'third');
nowLiThird.innerHTML = 3;
list.append(nowLiThird);

let liFourth = document.createElement('li');
liFourth.setAttribute('id', 'fourth');
liFourth.innerHTML = 4;
list.append(liFourth);

//Task 4

let h1 = document.querySelector('h1')
console.log(h1.outerHTML)

let a = document.createElement('a')
a.setAttribute('id', 'link');
a.setAttribute('href', 'https://dom.spec.whatwg.org/') 

 a.innerHTML = h1.outerHTML
 console.log(a.outerHTML)//<a id="link" href="https://dom.spec.whatwg.org/"><h1>Document Object Model<span>DOM</span> </h1></a>