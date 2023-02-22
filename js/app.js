'use strict'
// Lesson 31

//Task 1


// function getData (url){
//   let arr = []
//   let result = fetch(url);
//   result.then(response => 
//       {
//           if(response.ok){
//             return response.json();
//           }
//          throw new Error(`Error: ${response.status}`);
//       })
//   .then(data =>  {  const dataJsonStartingWithA =  data.filter(item => {
//                 if(typeof item.title === 'string'){
//                   return item.title[0] === 'a';
//                 } else {
//                     return false;
//                 }
               
//             });
//           //   const dataJsonStartingWithAb =  data.filter(item => {
//           //     if(typeof item.title === 'string'){
//           //       return item.title[1] === 'b';
//           //     } else {
//           //         return false;
//           //     }        
//           // });
//            console.log(dataJsonStartingWithA)
//         //   console.log(dataJsonStartingWithAb)
//   })
//   .catch(error => console.log(error.message))
// }

// getData('https://jsonplaceholder.typicode.com/todos');


//Task 2

// async function getAsincData(url){
//   try{
//       let result = await fetch(url);
//       if(result.ok){
//           let response = await result.json();
//           const dataJsonStartingWithA= response.filter(item => {
//               if(typeof item.title == 'string') {
//                   return item.title[0] === 'a';
//               } else {
//                   return false;
//               }
//           });
//       console.log(dataJsonStartingWithA)
   
//       } else {
//           throw new Error(`Error: ${result.status}`);
//       }
//   } catch(error){
//       console.log(error.message)
//   }
// }
// getAsincData('https://jsonplaceholder.typicode.com/todos/');


//Task 3


// function getData (url){
//   let result = fetch(url);
//   result.then(response => 
//       {
//           if(response.ok){
//             return response.json();
//           }
//          throw new Error(`Error: ${response.status}`);
//       })
//   .then(data =>  {  const dataJsonStartingWithA =  data.filter(item => {
//                 if(typeof item.title === 'string'){
//                   return item.title[0] === 'a';
//                 } else {
//                     return false;
//                 }
               
//             });
//             const dataJsonStartingWithAb =  data.filter(item => {
//               if(typeof item.title === 'string'){
//                 return item.title[1] === 'b';
//               } else {
//                   return false;
//               }        
//           });
//            console.log(dataJsonStartingWithA)
//            console.log(dataJsonStartingWithAb)
//   })
//   .catch(error => console.log(error.message))
// }

// getData('https://jsonplaceholder.typicode.com/todos');




//Task 4


async function getAsincData(url){
  try{
      let result = await fetch(url);
      let response;
      if(result.ok){
       response = await result.json();
          const dataJsonStartingWithA =  response.filter(item => {
            if(typeof item.title === 'string'){
            return  item.title[0] === 'a';
             }
            else {
                return false;
            }
        }
        );
        const dataJsonStartingWithAb =  response.filter(item => {
          if(typeof item.title === 'string'){
            return item.title[1] === 'b';
          } else {
              return false;
          }        
      });
  
              let divUserAb = document.querySelector('.user-ab');
              let btnAddA = document.querySelector('.add-a');
              let btnAddAll = document.querySelector('.add-all') 

                btnAddA.addEventListener('click', function(event){
                event.preventDefault();    
                let divUserA = document.querySelector('.user-a');

         if( divUserA.innerHTML === '' ||  divUserAb.innerHTML !== ''){
              divUserAb.innerHTML = ''
              divUserA.innerHTML = '' 
              btnAddA.style.backgroundColor = 'lightsteelblue';
              btnAddAb.style.backgroundColor = '';
              btnAddAll.style.backgroundColor = '';
              dataJsonStartingWithA.forEach(item => {
              divUserA.innerHTML += JSON.stringify(item) + "<br/>";
             })
         }
             });


        let btnAddAb= document.querySelector('.add-ab');
            btnAddAb.addEventListener('click', function(event){
            event.preventDefault();
         let divUserAb = document.querySelector('.user-ab');
         let divUserA = document.querySelector('.user-a');
         if(divUserAb.innerHTML === '' || divUserA.innerHTML !== '' ){
          divUserA.innerHTML = ''
          divUserAb.innerHTML = ''
          btnAddA.style.backgroundColor = '';
          btnAddAb.style.backgroundColor = 'lightsalmon';
          btnAddAll.style.backgroundColor = '';
         dataJsonStartingWithAb.forEach(item => {
         divUserAb.innerHTML += JSON.stringify(item) + "<br/>";
      });  
         }
         })

          btnAddAll.addEventListener('click', function(event){
                event.preventDefault();
                let divUserA = document.querySelector('.user-a');
                if( divUserA.innerHTML === ''){
                btnAddA.style.backgroundColor = '';
                btnAddAb.style.backgroundColor = '';
                btnAddAll.style.backgroundColor = 'lemonchiffon';
                dataJsonStartingWithA.forEach(item => {
                divUserA.innerHTML += JSON.stringify(item) + "<br/>";
               })
           }
           let divUserAb = document.querySelector('.user-ab');
           if(divUserAb.innerHTML === ''){
            dataJsonStartingWithAb.forEach(item => {
            divUserAb.innerHTML += JSON.stringify(item) + "<br/>";
         });  
            }
          });
      } else {
          throw new Error(`Error: ${result.status}`);
      }
  } catch(error){
      console.log(error.message)
  }
};



getAsincData('https://jsonplaceholder.typicode.com/todos');




