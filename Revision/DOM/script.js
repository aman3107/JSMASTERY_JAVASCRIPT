console.log("Hello World");

/*Selecting Elements */

// const el = document.getElementById("element");
// console.log(el);

// const h1 = document.getElementsByTagName("h2");
// console.log(h1);

// const classSelector = document.getElementsByClassName("test");
// console.log(classSelector);

// const cssSelectorAll = document.querySelectorAll("h2.test");
// console.log(cssSelectorAll);

// const cssSelector = document.querySelector(".test");
// const cssSelector = document.querySelector("#heading");
// const cssSelector = document.querySelector("h2");
// console.log(cssSelector);

/* Elements Properties and Methods */

// const el = document.querySelector("#heading");
// console.log(el.classList);
// console.log(el.className);
// console.log(el.innerHTML);

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   alert("You clicked on the button");
// });

// console.log(button.getBoundingClientRect());
// console.log(button.hasAttribute("type"));
// console.log(button.removeAttribute("type"));
// console.log(button.hasAttribute("type"));

/* Working with classes */
// const menuclick = (currEle) => {
//   const menuItems = document.getElementsByClassName("menu-item");
//   for (let i = 0; i < menuItems.length; i++) {
//     menuItems[i].classList.remove("active");
//   }
//   currEle.classList.add("active");
// };

/* Creating, Traversing and Removing Nodes */

// const heading = document.createElement("h1");
// const body = document.querySelector("body");
// console.log(body.appendChild(heading));
// heading.innerText = "hello world";

const subjects = document.querySelector(".subjects");
console.log(subjects);
console.log(subjects.firstElementChild);
console.log(subjects.lastElementChild);

const favSubject = document.querySelector(".fav-subject");
console.log(favSubject);
console.log(favSubject.previousElementSibling);
console.log(favSubject.nextElementSibling);

favSubject.remove();
