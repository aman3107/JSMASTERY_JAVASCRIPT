// console.log("hello world");

/* The new keyword */

// It creates a new object
// const person = new Object();
// const person1 = {};
// console.log(person, person1);
// person.firstName = "John";
// person1.firstName = "John";
// console.log(person, person1);

// It creates a new array
// const arr = [1, 2, 3];
// const arr1 = new Array(1, 2, 3);
// console.log(arr, arr1);

// const date = new Date("January 23, 2024");
// console.log(date);

// const myNumber = new Number(100.23);
// console.log(myNumber.toFixed(0));

/* The this keyword */

function Sentence(words) {
  this.words = words;
  console.log(this);
}

const firstString = new Sentence("hello, this is a new sentence");

const person = {
  firstName: "John",
  getName() {
    console.log(this);
  },
};
person.getName();

function Cars(color, brand, wheels) {
  this.color = color;
  this.brand = brand;
  this.wheels = wheels;

  console.log(this);
}

const blueCar = new Cars("blue", "Toyota", 4);
const redCar = new Cars("red", "Ferrari", 4);
console.log(blueCar, redCar);
