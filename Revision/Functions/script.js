// console.log("Hello World");

// A BLOCK OF CODE => PERFORMS A TASK

// function square(number) {
//   return number * number;
// }

// console.log(square(10));

// // Function Declaration

// function name(params) {
//   console.log(params);
// }

// Function Expression

// const name1 = function (params) {
//   console.log(params);
// };

// An arrow Function

// const name2 = (params) => {
//   console.log(params);
// };

// function sayHi(name) {
//   console.log(`Hi, ${name}`);
// }

// Invoking a Function

// sayHi("Aman");
// sayHi("Jane");

/* Return */

// function add(a, b) {
//   return a + b;
// }

// const sum = add(2, 2);
// console.log(sum);

/* Arrow Functions */

// const square = (num) => {
//   return num * num;
// };

// const square = (num) => num * num;

// const res = square(5);
// console.log(res);

/* Parameters vs Arguments */

const sayHi = (name, age) => {
  console.log(`Hi, ${name} is ${age} years old`);
};

sayHi("Aman", 25);

const add = (a, b = 0) => {
  return a + b;
};

console.log(add(2));
