const fs = require('fs');

const groups = fs
  .readFileSync('./day6.txt', { encoding: 'utf-8' })
  .split('\r\n\r\n')
  .filter((x) => x);

let total = 0;
let partTwoTotal = 0;
// console.log(groups);
for (const group of groups) {
  // console.log(group);
  const uniques = new Set([...group.replace(/\r\n/g, '')]);
  total += uniques.size;

  partTwoTotal += [...uniques].filter((char) =>
    group
      .split('\r\n')
      .filter((x) => x)
      .every((form) => form.includes(char))
  ).length;
}

console.log(total);
console.log(partTwoTotal);
