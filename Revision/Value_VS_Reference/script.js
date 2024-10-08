// JavaScript Differentiates Data Types on:
//- Primitive Values(Number,String,Boolean)
//- Complex Values(Objects,Arrays);

// let x = 1;
// let y = x;

// x = 2;
// console.log(x, y);

// const animals = ["dog", "cat"];
// const otherAnimals = animals;
// animals.push("llama");
// console.log(animals, otherAnimals);

// const person = { firstName: "Jon", lastName: "Snow" };
// const otherPerson = person;
// person.firstName = "Johny";
// console.log(person, otherPerson);

/* Shallow Cloning */
/* Cloning Arryays: 
1st way Spread Operator */
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = [...numbers];
// numbers.push(6);
// console.log(numbers, newNumbers);

// 2nd Way: Array slice
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.slice();
// numbers.push(6);
// console.log(numbers, newNumbers);

/* Cloning Objects
1st Way Spread Operator */

// const person = { name: "Jon", age: 20 };
// const otherPerson = { ...person };
// person.age = 22;
// console.log(person, otherPerson);

/* 2nd Way Object.assign() */
// const person = { name: "Jon", age: 20 };
// const otherPerson = Object.assign({}, person);
// person.age = 22;
// console.log(person, otherPerson);

/* Deep Cloning */

const person = {
  firstName: "Emma",
  car: {
    brand: "BMW",
    color: "blue",
    wheels: 4,
  },
};

// const newPerson = { ...person };
// newPerson.firstName = "Mia";
// newPerson.car.color = "red";
// console.log(person, newPerson);

const newPerson = JSON.parse(JSON.stringify(person));
console.log(newPerson);
newPerson.firstName = "Mia";
newPerson.car.color = "red";
console.log(newPerson, person);
