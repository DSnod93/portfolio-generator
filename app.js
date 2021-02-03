const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});











// const fs = require('fs');

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);
// const [name, github] = profileDataArgs;

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
// };

// printProfileData(profileDataArgs);


// const generatePage = (userName, githubName) => {
//     return `
//   <!DOCTYPE html> 
//   <html lang="en"> 
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//   </head>

//   <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//   </body>
//   </html>
//   `;
// };



// fs.writeFile('index.html', generatePage(name, github), err => {

//     if(err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });






// const printProfileData = profileDataArr => {
//     // This...
//     for(let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     } 
// };

// console.log('================');

//  // Is the same as this...
//  profileDataArr.forEach((profileItem) => console.log(profileItem));


// CAPTURE COMMAND-LINE ARGUMENTS

// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);



// PROTECT DATA WITH CONST

// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//     name: 'Lerantino',
//     age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';




// ES6 ARROW FUNCTIONS

// const printProfileData = profileDataArr => {
//     console.log(profileDataArr);
// };

// printProfileData(profileDataArgs);

//  Using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
// };

// Using new arrow function syntax
// const  addNums = (numOne, numTwo) => {
//     return numOne + numTwo;
// };

    //     *implicit return*
    // const addNums = (numOne, numTwo) => numOne + numTwo;

    // const sum = addNums(5, 3); // sum would be 8

// PRINT ARGUMENTS ONE AT A TIME

//     // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//       console.log(profileDataArr[i]);
//     }
//   };
