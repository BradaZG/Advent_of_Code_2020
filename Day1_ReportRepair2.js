const fs = require('fs');

const input = fs
  .readFileSync('./day1.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter((x) => x)
  .map((x) => parseInt(x));

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === 2020) {
      console.log(input[i] * input[j]);
    }
  }
}

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    for (k = j + 1; k < input.length; k++) {
      if (input[i] + input[j] + input[k] === 2020) {
        console.log(input[i] * input[j] * input[k]);
      }
    }
  }
}
