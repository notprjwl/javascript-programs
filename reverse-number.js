// 230 -> 32

const reverseNumber = (numInt) => {
  const num = numInt.toString();
  if (num.slice(-1) === '0') {
    const trimmedNum = num.slice(0, -1);
    const reversedNumber = trimmedNum.split("").reverse().join("");
    console.log(parseInt(reversedNumber, 10));
  } else {
    const reversedNumber = num.split("").reverse().join("");
    console.log(parseInt(reversedNumber, 10));
  }
};

reverseNumber(230465040000);