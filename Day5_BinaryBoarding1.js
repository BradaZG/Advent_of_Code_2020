const fs = require('fs');

const input = fs.readFileSync('./day5.txt');
const inputArr = input.toString().split('\r\n');

const numberArr = inputArr.map((input) => {
  const arr = input.split('');
  for (let i = 0; i < 7; i++) {
    if (arr[i] === 'F') {
      arr[i] = 0;
    }
    if (arr[i] === 'B') {
      arr[i] = 1;
    }
  }
  for (let i = 7; i < arr.length; i++) {
    if (arr[i] === 'L') {
      arr[i] = 0;
    }
    if (arr[i] === 'R') {
      arr[i] = 1;
    }
  }
  return arr.join('');
});

let highestID = 0;

let idArr = [];

numberArr.map((number) => {
  // row = parseInt(Number(number.slice(0, 7)), 2);
  // numRow.push(row);
  // col = parseInt(Number(number.slice(7)), 2);
  // numCol.push(col);

  // if (row * 8 + col > highestID) {
  //   highestID = row * 8 + col;
  // }
  idArr.push(parseInt(Number(number), 2));
  if (parseInt(Number(number), 2) > highestID) {
    highestID = parseInt(Number(number), 2);
  }
});

console.log(highestID);

idArr.sort((a, b) => a - b);

for (let i = 0; i < idArr.length; i++) {
  if (idArr[i + 1] - idArr[i] > 1) {
    console.log(idArr[i] + 1);
  }
}
