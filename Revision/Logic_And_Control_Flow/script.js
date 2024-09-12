// console.log("Hello World");

/* If Statement */

// const age = 17;

// if (age > 18) {
//   console.log("You may enter");
// } else if (age === 18) {
//   console.log("You just turned 18, Welcome!");
// } else {
//   console.log("Grow up!");
// }

/* Truthy and Falsy Values */

// const dogs = 20;

// if (dogs) {
//   console.log(`You have ${dogs} dogs`);
// } else {
//   console.log("You have no dogs");
// }

// Falsy Values : 0,false,'',null,undefined,Nan
// Truthy Values: Everything other than falsy values

/* Logical Operators Part 2 */

// const age = 17;
// const isCool = true;

// if (isCool && age > 18) {
//   console.log("You may enter");
// } else {
//   console.log("You can't enter");
// }

// console.log("truthy" && 1 && "hello" && 789);
// console.log("truthy" && 0 && "" && 789);

// console.log("truthy" || 1 || "hello" || 789);
// console.log("" || 0 || "hello" || 789);
// console.log("" || 0 || NaN || null);

// console.log(!0);
// console.log(!1);
// console.log(!!0);

/* Switch Statement */

// const superHero = "Thor";

// switch (superHero) {
//   case "Iron Man":
//     console.log("I am Iron Man");
//     break;
//   case "Thor":
//     console.log("I am Thor");
//     break;

//   case "Captain America":
//     console.log("I am Captain America");
//     break;
//   default:
//     console.log("SuperHero is not present");
// }

/* Ternary Operator */

// const age = 18;
// const result =
//   age > 18 ? console.log("You may enter") : console.log("Grow up!");

/* Looping */

// let i = 0;
// while (i < 10) {
//   console.log(`${i}`);
//   i++;
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}
