console.log("Hello World");
// Object is an unordered collection of related data in form of key and value pairs

// const firstName = "Johny";

// const person = {
//   firstName: firstName,
//   lastName: "Cruise",
//   age: 40,
//   car: {
//     brand: "Toyota",
//     year: 2015,
//     color: "red",
//   },
// };

// person.dog = { name: "fluffy", age: 2 };
// console.log(person);

/* DOT Notation */
// console.log(person.firstName);
// console.log(person.dog.name);

/* Square Bracket Notation */
// const property = "age";
// console.log(person[property]);

/* Methods */

// const dog = {
//   name: "fluffy",
//   bark: () => {
//     console.log("Woof Woof");
//   },
// };

// dog.bark();

/* Built-In Methods */

// Object.keys() creates an array containing the keys of an object

const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

const positions = Object.keys(employees);
console.log(positions);

// Object.values() creates an array containing the values of an object

const session = {
  id: 1,
  time: `26-July-2018`,
  device: "Mobile",
  browser: "Chrome",
};

const sessionInfo = Object.values(session);
console.log(sessionInfo);

// Object.entries() creates a nested array of the key/value pairs of an object

const operatingSystem = {
  name: "Ubantu",
  version: 18.04,
  license: "Open Source",
};

const entries = Object.entries(operatingSystem);
console.log(entries);

entries.forEach((entry) => {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
});

// Object.freeze() prevents modification to properties
// and values of an object, and prevents properties
// from being added or removed from an object

// const user = {
//   username: "John",
//   password: "123123",
// };

// const admin = Object.freeze(user);
// admin.password = "1234";
// console.log(admin);

// Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties

const user = {
  username: "John",
  password: "123123",
};

const newUser = Object.seal(user);
newUser.password = "test123";
newUser.active = true;
console.log(newUser);
