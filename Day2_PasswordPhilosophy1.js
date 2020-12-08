const fs = require('fs');

const input = fs.readFileSync('./day2.txt');
const inputArr = input.toString().split('\r\n');
let passNumOne = 0;
let passNumTwo = 0;

for (let i = 0; i < inputArr.length; i++) {
  const arr = inputArr[i].split(' ');
  const range = arr[0].split('-');
  const letter = arr[1][0];
  const password = arr[2];
  const charNum = [...password].filter((char) => char === letter);

  if (charNum.length >= range[0] && charNum.length <= range[1]) {
    passNumOne++;
  }
}

console.log(passNumOne);

for (let i = 0; i < inputArr.length; i++) {
  const arr = inputArr[i].split(' ');
  const range = arr[0].split('-');
  const letter = arr[1][0];
  const password = arr[2];

  if (password[range[0] - 1] === letter && password[range[1] - 1] !== letter) {
    passNumTwo++;
  }
  if (password[range[0] - 1] !== letter && password[range[1] - 1] === letter) {
    passNumTwo++;
  }
}

console.log(passNumTwo);
