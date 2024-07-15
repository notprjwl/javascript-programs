/**
 * FUNCTION DECELERATION
 */

// function square(num) {
//    return num * num
// }

// console.log(square(5))

/**
 * FUNCTION EXPRESSION
 */

// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(5, 5));

/**
 * ANONYMOUS FUNCTION
 */
// the function which as no name is called anonymous function like this -

// const add = function (a, b) {
//   return a + b;
// };

/**
 * FIRST CLASS FUNCTIONS - when functions can be passed as an argument to another functions is known as first class functions
 */

// const add = function (a, b) {
//   return a + b;
// };

// function result(fn) {
//   return "the result of addition is " + fn(5, 5);
// }

// console.log(result(add));

/**
 * WHAT IS IIFE? - Immediately Invoked Function Expression
 * - IIFE is a function that is executed as soon as it is defined
 */

// (function add(a, b) {
//   console.log(a + b);
// })(3, 4);

// INTERVIEW QUESTION ON IIFE

// (function (x) {
//   return (function (y) {
//       console.log(x); // here the output will be 3 because of closure
//     })(2);
// })(3);

/**
 * FUNCTION SCOPES
 */

// var a = 10,
//   b = 20,
//   name = "prjwl";

// function add() {
//   return a + b;
// }

// console.log(add());

// function result() {
//   var a = 10,
//     b = 30;
//   function add() {
//     return name + " has scored " + (a + b);
//   }
//   return add();
// }

// console.log(result());

/**
 * FUNCTION SCOPES QUESTION
 */
// due to let it creates a new block every time the function runs
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000); // 0, 1, 2, 3, 4
// }

/**
 * FUNCTION HOISTING QUESTION
 */
var x = 21;

var fun = function () {
    var x = 31;
    console.log(x);
};

fun();
