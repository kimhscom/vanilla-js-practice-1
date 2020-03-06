// JS Coding Guide
let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

// String
const what = "Kim";
console.log(what);

// Array
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(dayOfWeek);
console.log(dayOfWeek[4]);

// Object
const kimInfo = {
  name: "Hyunsu",
  age: 35,
  gender: "Male",
  health: true
};

console.log(kimInfo);
kimInfo.gender = "Female";
console.log(kimInfo.gender);

// Function
function sayHello(name, age) {
  console.log("Hello!", name, "you have", age);
}

sayHello("French", 31);

function hiGuy(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greeting = hiGuy("Hyunsu", 35);
console.log(greeting);

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multi: function(a, b) {
    return a * b;
  },
  div: function(a, b) {
    return a / b;
  }
};

const plus = calculator.plus(5, 5);
console.log(plus);

const minus = calculator.minus(6, 2);
console.log(minus);

const multi = calculator.multi(7, 7);
console.log(multi);

const div = calculator.div(36, 6);
console.log(div);
/*
const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);
*/
// if-else
if ("hyunsu" === "kim") {
  console.log("hi");
} else if ("10" === "11") {
  console.log("lalala");
} else {
  console.log("ho");
}

// and
if (20 > 5 && "hyunsu" === "hyunsu") {
  console.log("yes");
} else {
  console.log("no");
}

// or
if (20 > 5 || "hyunsu" === "kim") {
  console.log("yes");
} else {
  console.log("no");
}

/*
true && true = true;
true && false = false;
false && true = false;
false && false = false;

true || true = true;
true || false = true;
false || true = true;
false || false = false;
*/

// prompt
// prompt("Ask someting");
/*
const age = prompt("How old are you?");

if (age >= 18 && age <= 21) {
    console.log("you can drink but you should not");
} else if (age > 21) {
    console.log("go ahed");
} else {
    console.log("too young");
}
*/

const title = document.querySelector("#title");
/*
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";
*/

const CLICKED_CLASS = "clicked";

function handleClick() {
  /*
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
    */
  /*
   const hasClass = title.classList.contains(CLICKED_CLASS);
   if(hasClass) {
       title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
   }
   */
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  // title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick); // click, mouseenter
}
init();

function handleOffline() {
  console.log("Bye bye");
}

function handleOnline() {
  console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
