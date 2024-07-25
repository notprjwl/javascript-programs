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
// var x = 21;

// var fun = function () {
//     var x = 31;
//     console.log(x);
// };

// fun();

/**
 * PARAMS VS ARGUMENTS
 */

// function add(num1, num2) {
//   // params
//   return num1 + num2;
// }

// console.log(add(1, 2)); // arguments

/**
 * SPREAD VS REST
 */
// function add(...nums) {     // when we use the spread operator (...) here it is called as rest operator
//   return nums[0] + nums[1];
// }

// arr = [5, 5];

// console.log(add(...arr));   // spread operator

/**
 * INTERVIEW QUESTION
 */
// const add = (num1, num2, ...numbers) => {
//  return num1 + num2 , numbers
// }

// console.log(add(1, 2, 3, 4, 5, 6, 7))

/**
 * ARROW FUNCTION vs NORMAL FUNCTION
 */

// 1 - syntax
// const addArr = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addArr(1, 2))

// function addFun(num1, num2) {
//   return num1 + num2;
// }

// console.log(addFun(1, 2));

// 2 - implicit return keyword
// const addArr = (num1, num2) => num1 + num2;

// console.log(addArr(1, 2));

// function addFun(num1, num2) {
//   return num1 + num2;
// }

// console.log(addFun(1, 2));

// 3 - arguments keyword
// const addArr = () => {
//     return arguments
// }

// console.log(addArr(1, 2))

// function addFun() {
//   return arguments
// }

// console.log(addFun(1, 2));

// global.username = "globalprjwl"

// const world = {
//   username: "prjwl",
//   hello1: () => {
//     console.log("yo whad up", global.username);     // this throws undefined error because this is pointing to the global scope 
//   },
//   hello2() {
//     console.log("yo whad up", this.username);     // this shows the username this keyword is pointing to the local scope
//   },
// };


// world.hello1();
// world.hello2();


/**
 * 
 */