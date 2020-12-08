const fs = require('fs');

let trees1 = 0;
let trees2 = 0;
let trees3 = 0;
let trees4 = 0;
let trees5 = 0;

const input = fs.readFileSync('./day3.txt');
const inputArr = input.toString().split('\r\n');

for (let i = 1; i < inputArr.length; i++) {
  if (inputArr[i][i % inputArr[i].length] === '#') {
    trees1++;
  }

  if (inputArr[i][(3 * i) % inputArr[i].length] === '#') {
    trees2++;
  }

  if (inputArr[i][(5 * i) % inputArr[i].length] === '#') {
    trees3++;
  }

  if (inputArr[i][(7 * i) % inputArr[i].length] === '#') {
    trees4++;
  }
}

for (let i = 2; i < inputArr.length; i = i + 2) {
  if (inputArr[i][(i / 2) % inputArr[i].length] === '#') {
    trees5++;
  }
}

console.log(trees2);
console.log(trees1 * trees2 * trees3 * trees4 * trees5);
