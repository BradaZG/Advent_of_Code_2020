const fs = require('fs');

const lines = fs
  .readFileSync('./day12.txt', { encoding: 'utf-8' })
  .split('\r\n')
  .filter((x) => x);

const directionToCoord = {
  0: 'E',
  1: 'N',
  2: 'W',
  3: 'S',
};

class Boat {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = 0;
  }

  move(char, number) {
    switch (char) {
      case 'N':
        this.y += number;
        break;
      case 'S':
        this.y -= number;
        break;
      case 'E':
        this.x += number;
        break;
      case 'W':
        this.x -= number;
        break;
      case 'L':
        this.direction = (this.direction + number / 90 + 4) % 4;
        break;
      case 'R':
        this.direction = (this.direction - number / 90 + 4) % 4;
        break;
      case 'F':
        this.move(directionToCoord[this.direction], number);
        break;
      default:
        throw new Error('Not implemented: ' + char);
    }
  }

  getPosition() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
}

const boat = new Boat();

lines.forEach((line) => {
  const { groups } = /^(?<char>.)(?<number>\d+)$/.exec(line);
  boat.move(groups.char, parseInt(groups.number));
});

console.log(boat.getPosition());

class BetterBoat {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.dx = 10;
    this.dy = 1;
  }

  move(char, number) {
    switch (char) {
      case 'N':
        this.dy += number;
        break;
      case 'S':
        this.dy -= number;
        break;
      case 'E':
        this.dx += number;
        break;
      case 'W':
        this.dx -= number;
        break;
      case 'L':
        {
          let angle = (number / 180) * Math.PI;
          let dx = this.dx * Math.cos(angle) - this.dy * Math.sin(angle);
          let dy = this.dx * Math.sin(angle) + this.dy * Math.cos(angle);
          this.dx = Math.round(dx);
          this.dy = Math.round(dy);
        }
        break;
      case 'R':
        {
          let angle = (-number / 180) * Math.PI;
          let dx = this.dx * Math.cos(angle) - this.dy * Math.sin(angle);
          let dy = this.dx * Math.sin(angle) + this.dy * Math.cos(angle);
          this.dx = Math.round(dx);
          this.dy = Math.round(dy);
        }
        break;
      case 'F':
        this.x += number * this.dx;
        this.y += number * this.dy;
        break;
      default:
        throw new Error('Not implemented: ' + char);
    }
  }

  getPosition() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
}

const betterBoat = new BetterBoat();

lines.forEach((line) => {
  const { groups } = /^(?<char>.)(?<number>\d+)$/.exec(line);
  betterBoat.move(groups.char, parseInt(groups.number));
});

console.log(betterBoat.getPosition());
