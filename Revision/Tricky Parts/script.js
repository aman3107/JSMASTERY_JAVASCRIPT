// console.log("Hello World");

// Global Scope

// const name = "John";
// const logName = () => {
//   console.log(`Hi, ${name}`);
// };

// logName();

// Local Scope or Function Scope

// const someFunction = () => {
//   const name = "Jenny";
//   console.log(name);
// };
// console.log(name);
// someFunction();

// Hoisting in JavaScript
// console.log(age);
// var age = 20;

// hoist();
// function hoist() {
//   console.log("Hello World");
// }

/* Closures */

// const outer = () => {
//   const outerVar = "Hello World!";

//   const inner = () => {
//     const innerVar = "Hi!";
//     console.log(outerVar, innerVar);
//   };
//   console.log(outerVar);
//   return inner;
// };
// const innerFunc = outer();
// innerFunc();
// console.log(outerVar);
// outer();

const init = () => {
  const hobby = "Learning JavaScript";
  const displayHobby = () => {
    console.log(hobby);
  };
  return displayHobby;
};
const myFunc = init();
myFunc();
