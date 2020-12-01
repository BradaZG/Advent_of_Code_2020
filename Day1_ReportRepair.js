// Find the two entries that sum to 2020 and then multiply those two numbers together.

const fs = require('fs');

var input = fs.readFileSync('./day1.txt');
var inputArr = input.toString().split('\r\n');

const findEtriesAndMultiply2 = (arr) => {
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (!num1) {
        if (Number(arr[i]) + Number(arr[j]) === 2020) {
          num1 = arr[i];
          num2 = arr[j];
        }
      }
    }
  }

  return num1 * num2;
};

const findEtriesAndMultiply3 = (arr) => {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length - 2; k++) {
        if (!num1) {
          if (Number(arr[i]) + Number(arr[j]) + Number(arr[k]) === 2020) {
            num1 = arr[i];
            num2 = arr[j];
            num3 = arr[k];
          }
        }
      }
    }
  }

  return num1 * num2 * num3;
};

console.log(findEtriesAndMultiply2(inputArr));
console.log(findEtriesAndMultiply3(inputArr));
