const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(() => {
//   return tutorials.map()
// })

// function titleCaseString(arr){
//   const eachWord = arr.split(' ');
//   console.log(eachWord);
//   return 
// };


function titleCased() {
  return tutorials.map(titleCaseString);
}
// logic for 
//const titleCased = tutorials.map((string) => titleCaseString(string));
//let capWord = (string) => string.charAt(0).toUpperCase() + string.slice(1)

function capWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function titleCaseString(string){
  const eachWord = string.split(' ');
  const newVersion = eachWord.map((elem) => capWord(elem))
  console.log(newVersion)
  return newVersion.join(" ")
};

//let capWord = (string) => string.charAt(0).toUpperCase() + string.slice(1)











// this does work

// const titleCased = () => {
//   return tutorials.map(string => {
//     const array = string.split(` `)
//     return array.map(string => {
//       return string.charAt(0).toUpperCase() + string.slice(1)
//     }).join(` `)
//   })
// }











// function callback(array)
// const individualArray = tutorials.toString().split(" ");

// const titleCased = tutorials.toString




// const titleCased = () => {
//   return tutorials.map(string => {
//     const array = string.split(` `)
//     return array.map(string => {
//       return string.charAt(0).toUpperCase() + string.slice(1)
//     }).join(` `)
//   })
// }

// const titleCased = 

// const titleCased = tutorials.map((tutorials, changeCase) => {
//   let updatedObject = Object.assign({}, tutorials);
  



// function changeCase(array) {
//   let updatedArray = [];
//   updatedArray.push(tutorials).split(" ");
//   for(let i = 0; i <= array.length; i++) {
//     if(i.charAt(0).typeOf(NaN) === i.charAt(0).toLowerCase()) {
//       return updatedObject.push(i.charAt(0).toUpperCase());
//     }
//   }
// }







// const titleCased = tutorials.map(() => {
//   return tutorials
// });

// function callBack(array) {
//   for (let index of array) {
//     let singleWord = 
//   }
// }
//   for(let i = 0; i of array){
//     updatedObject.push(array.split(" "));
//     string.charAt(0).toUpperCase();
//     return updatedObject;
//   }
//   //return updatedObject;

// });
// // 



//to activate the robot we will take a robot and map to is activated
// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];

// const activatedRobots = robots.map((robot) => {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2, 
//     isActivated: true,
//   });
// });

// console.log(activatedRobots);