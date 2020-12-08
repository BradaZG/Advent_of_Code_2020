const fs = require('fs');

//const input = fs.readFileSync('./day7.txt');
//const inputArr = input.toString().split('\r\n');

const lines = fs
  .readFileSync('./day7.txt', { encoding: 'utf-8' })
  .split('\r\n');
//.filter((x) => x);

// Part 1

/* const colorMap = new Map();

const containsShinyGold = (color) => {
  if (color == 'shiny gold') return true;
  if (!colorMap.has(color)) return false;

  const bagsWithin = colorMap.get(color);

  for (const bag of bagsWithin) {
    if (containsShinyGold(bag)) {
      return true;
    }
  }
  return false;
};

for (const line of lines) {
  const [bag, bags] = line.split(' bags contain ');

  bags
    .replace(/\./, '')
    .split(', ')
    .map((txt) => {
      const { groups } = /((?<number>\d+) )?(?<color>.*)/.exec(
        txt.replace(/ bags?/, '')
      );

      if (!colorMap.has(bag)) {
        colorMap.set(bag, []);
      }
      colorMap.set(bag, [...colorMap.get(bag), groups.color]);
    });
}

const colors = colorMap.keys();
let num = 0;

for (const color of colors) {
  if (containsShinyGold(color) && color !== 'shiny gold') num++;
}

console.log(num); */

/* ############### */

// Part 2

const colorMap = new Map();

const containsShinyGold = (color) => {
  if (color == 'shiny gold') return true;
  if (!colorMap.has(color)) return false;

  const bagsWithin = colorMap.get(color);

  for (const { color: bag } of bagsWithin) {
    if (containsShinyGold(bag)) {
      return true;
    }
  }
  return false;
};

for (const line of lines) {
  const [bag, bags] = line.split(' bags contain ');

  bags
    .replace(/\./, '')
    .split(', ')
    .map((txt) => {
      const { groups } = /((?<number>\d+) )?(?<color>.*)/.exec(
        txt.replace(/ bags?/, '')
      );

      if (!colorMap.has(bag)) {
        colorMap.set(bag, []);
      }
      if (!groups.number) groups.number = 0;
      colorMap.set(bag, [...colorMap.get(bag), groups]);
    });
}

const colors = colorMap.keys();
let num = 0;

for (const color of colors) {
  if (containsShinyGold(color) && color !== 'shiny gold') num++;
}

console.log(num);

const sumBags = (topBag) => {
  if (topBag.number === 0) return 0;

  const bagsWithin = colorMap.get(topBag.color);
  let sum = 1;

  for (const bag of bagsWithin) {
    sum += bag.number * sumBags(bag);
  }
  return sum;
};

console.log(sumBags({ number: 2, color: 'shiny gold' }) - 1);
