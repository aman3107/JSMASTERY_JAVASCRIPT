// console.log("Hello World");
// const double = "This is a double string";
// const backTick = `This is a backtick string`;
// console.log(double);
// console.log(backTick);

// const add = `${2 + 2}`;
// console.log(add);

// const sum = (a, b) => a + b;
// const total = `The total is ${sum(2, 2)}`;
// console.log(total);

// const rows = `
// 1
// 2
// 3
// `;

// console.log(rows);

/* Length Property */
// const name1 = "Aman";
// console.log(name1.length);

// const firstLetter = name1[0];
// const lastLetter = name1[name1.length - 1];
// console.log(firstLetter, lastLetter);

/* Change String Case */

// const mixedCase = "Hello! How are you?";
// const lowerCase = mixedCase.toLowerCase();
// const upperCase = mixedCase.toUpperCase();
// console.log(lowerCase);
// console.log(upperCase);

/* Searching for Substring */

// const hobbies = "I love HTML, CSS and JavaScript, CSS";
// // indexOf
// const firstIndex = hobbies.indexOf("CSS");
// // console.log(firstIndex);

// // lasIndexOf
// const lastIndex = hobbies.lastIndexOf("CSS");
// console.log(firstIndex, lastIndex);

// // includes
// const includesJavaScipt = hobbies.includes("JavaScript");
// console.log(includesJavaScipt);

// // startsWith
// console.log(hobbies.startsWith("I"));
// console.log(hobbies.startsWith("I love"));

// //endsWith
// console.log(hobbies.endsWith("CSS"));

/* Getting a Substring */

// const exampleString = "hotdog";
// const hot = exampleString.slice(0, 3);
// console.log(hot);

// const exampleString = "dog";
// console.log(exampleString.split(""));

// const exampleString1 = "The quick brown fox jumps over the lazy dog.";

// console.log(exampleString1.split(" "));

/* Reverse a String */
// const example = "test";
// const reverseString = example.split("").reverse().join("");
// console.log(reverseString);

// /* Repeat a String */
// const dogSays = "Woof!";
// console.log(dogSays.repeat(5));

// /* trim a string */
// const exampleString = "exampleString@google.com  ";
// console.log(exampleString.trim());

/* Exercise */

const guestList = "Our guests are: emma, jacob, isebella, ethan";

const length = guestList.length;
console.log(length);

const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList);

const isEthanOnTheList = uppercasedGuestList.includes("ETHAN");
console.log(isEthanOnTheList);

const substringGuest = uppercasedGuestList.slice(16);
console.log(substringGuest);

const guests = substringGuest.split(",");
console.log(guests);
