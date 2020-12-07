const fs = require('fs');

const input = fs.readFileSync('./day6.txt');
const inputArr1 = input
  .toString()
  .split('\r\n\r\n')
  .map((x) => x.replace(/\r\n/g, ''));

let sum1 = 0;

inputArr1.map((input) => (sum1 += [...new Set(input)].length));

console.log(sum1);

let sum2 = 0;

let questions = [];

let includes = false;

const inputArr2 = input.toString().split('\r\n\r\n');

inputArr2.map((input) => {
  questions = [];
  let arr = input.split('\r\n');

  if (arr.length === 1) {
    sum2 += arr[0].length;
  } else {
    for (let j = 0; j < arr[0].length; j++) {
      questions.push(arr[0][j]);
    }
    for (let j = 0; j < questions.length; j++) {
      includes = false;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i].includes(questions[j])) {
          includes = true;
        } else {
          includes = false;
          break;
        }
      }
      if (includes) sum2++;
    }
  }
});

console.log(sum2);
