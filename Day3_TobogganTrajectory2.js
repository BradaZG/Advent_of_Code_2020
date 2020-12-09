const fs = require('fs');

const lines = fs
  .readFileSync('./day3.txt', { encoding: 'utf-8' })
  .split('\r\n')
  .filter((x) => x);

class Map {
  constructor(map) {
    this.map = map;
  }
  getPositions(x, y) {
    return this.map[y][x % this.map[0].length];
  }

  getHeight() {
    return this.map.length;
  }
}

const map = new Map(lines.map((line) => [...line]));

const trySlope = (dx, dy) => {
  let x = 0;
  let y = 0;
  let trees = 0;

  while (y < map.getHeight()) {
    const current = map.getPositions(x, y);
    if (current == '#') trees++;
    x += dx;
    y += dy;
  }
  return trees;
};

console.log(trySlope(3, 1));

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

let res = 1;

for (const slope of slopes) {
  res *= trySlope(...slope);
}

console.log(res);
