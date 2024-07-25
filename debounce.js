;// const num = parseInt('7*6', 10)

// console.log(num)

// 1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame.

function display() {
  console.log("this keeps displaying after 2s");
}

function debounce(callback, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

const displayFunction = debounce(display, 2000);

displayFunction();

// setInterval(displayFunction, 1)
