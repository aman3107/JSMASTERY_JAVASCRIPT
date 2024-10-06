// const months = ["January", "February", "March", "April"];
// console.log(months[0]);
// months[2] = "Not March";
// console.log(months);

// const values = ["Apple", { name: "Aman" }, true, () => {}];
// console.log(values);
// console.log(values.length);

// for (let i = 0; i < months.length; i++) {
//   console.log(months[i]);
// }

/* Array Methods */

// const names = ["John", "Bob", "David", "Mark"];

// // Array Push
// names.push("Dean");
// console.log(names);

// // Array Pop
// names.pop();
// console.log(names);

// // Array Shift
// names.shift();
// console.log(names);

// // Array Unshift
// names.unshift("John");
// console.log(names);

// // Array Splice
// names.splice(2, 0, "Jenny", "Johny");
// console.log(names);
// names.splice(4, 2);
// console.log(names);

// // Array Slice
// const noOneLikesJohn = names.slice(2, 3);
// console.log(noOneLikesJohn);

/* Array forEach */
// const names = ["Jon", "Jenny", "Johny"];

// const logTheName = (name) => {
//   console.log(name);
// };

// names.forEach(logTheName);
// names.forEach((name, i) => {
//   console.log(name);
// });

// let sum = 0;
// let numbers = [56, 6, 44, 21];
// numbers.forEach((num, i) => {
//   sum += num;
// });
// console.log(sum);
// Use When
// Callback function is to be executed on every single element of the array.
// Improve performance (provided first condition is satisfied).
// Don't Use When
// You want to stop or break the loop when some condition is true, for example, you want to console log elements of myArray but break the loop if the value of the current element is 3, then I will compulsorily have to use standard for loop to be able to do so.
// The callback function is asynchronous. Instead use the standard for loop.

/* Array map */
// const inventory = [
//   { price: 5, name: "eggs" },
//   { price: 4, name: "hen" },
//   { price: 3, name: "mayo" },
//   { price: 5, name: "bread" },
// ];

// const prices = inventory.map((item) => item.price);
// console.log(prices);
// const items = inventory.map((item) => item.name);
// console.log(items);

/* Array filter */
const numbers = [-10, 0, -2, 15, -36, 25];
const even = numbers.filter((number) => number >= 0);
console.log(even);

const employeesData = [
  { name: "Sebastian", overTime: 5 },
  { name: "Cardi Vee", overTime: 10 },
  { name: "George Lopez", overTime: 12 },
];

const employeesToReward = employeesData.filter(
  (employee) => employee.overTime >= 7
);

const employeesName = employeesToReward.map((employee) => employee.name);
console.log(employeesToReward, employeesName);

employeesName.forEach((name) => console.log(`${name} received an reward`));
