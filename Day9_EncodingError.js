const fs = require('fs');

const lines = fs
  .readFileSync('./day9.txt', { encoding: 'utf-8' })
  .split('\r\n')
  .filter((x) => x)
  .map((x) => parseInt(x));

class Xmas {
  constructor(preamble) {
    this.array = preamble;
  }

  isValid(int) {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[i] + this.array[j] === int) {
          return true;
        }
      }
    }
    return false;
  }

  push(int) {
    this.array.push(int);
    this.array.shift();
  }
}

const preambleLength = 25;
const preamble = lines.slice(0, preambleLength);

const xmas = new Xmas(preamble);

let invalid;

for (let i = preambleLength; i < lines.length; i++) {
  const element = lines[i];
  if (xmas.isValid(element)) {
    xmas.push(element);
  } else {
    invalid = element;
    break;
  }
}

console.log(invalid);
console.log(lines.indexOf(invalid));
console.log(lines.length);

let weakness;

for (let l = 2; l < lines.indexOf(invalid) - l; l++) {
  for (let i = 0; i < lines.indexOf(invalid) - l + 1; i++) {
    let sum = 0;
    for (let j = 0; j < l; j++) {
      sum += lines[i + j];
    }
    if (sum === invalid) {
      const set = lines.slice(i, i + l);
      weakness = Math.min(...set) + Math.max(...set);
    }
  }
}

console.log(weakness);
