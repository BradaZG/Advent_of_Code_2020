const fs = require('fs');

const lines = fs
  .readFileSync('./day11.txt', { encoding: 'utf-8' })
  .split('\r\n')
  .filter((x) => x);

class Seating {
  constructor(lines) {
    this.height = lines.length;
    this.width = lines[0].length;

    this.seats = lines;
  }

  nextState2() {
    let hasChanged = false;

    const updatedSeats = [];

    this.seats.forEach((line, y) => {
      let updated = '';
      [...line].forEach((seat, x) => {
        let occupied = 0;
        const directions = [
          { x: 1, y: 0 },
          { x: -1, y: 0 },
          { x: 1, y: 1 },
          { x: -1, y: -1 },
          { x: 1, y: -1 },
          { x: -1, y: 1 },
          { x: 0, y: 1 },
          { x: 0, y: -1 },
        ];
        directions.forEach(({ x: dx, y: dy }) => {
          let posX = x + dx;
          let posY = y + dy;
          while (
            posX >= 0 &&
            posY >= 0 &&
            posX < this.width &&
            posY < this.height
          ) {
            if (this.seats[posY][posX] === '#') {
              occupied++;
              break;
            }
            if (this.seats[posY][posX] === 'L') {
              break;
            }
            posX += dx;
            posY += dy;
          }
        });

        if (seat === 'L' && occupied === 0) {
          updated += '#';
          hasChanged = true;
        } else if (seat === '#' && occupied >= 5) {
          updated += 'L';
          hasChanged = true;
        } else {
          updated += seat;
        }
      });

      updatedSeats.push(updated);
    });

    this.seats = updatedSeats;

    return hasChanged;
  }

  nextState1() {
    let hasChanged = false;

    const updatedSeats = [];

    this.seats.forEach((line, y) => {
      let updated = '';
      [...line].forEach((seat, x) => {
        let occupied = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (
              (i !== 0 || j !== 0) &&
              y + i >= 0 &&
              y + i < this.height &&
              x + j >= 0 &&
              x + j < this.width &&
              this.seats[y + i][x + j] === '#'
            ) {
              occupied++;
            }
          }
        }
        if (seat === 'L' && occupied === 0) {
          updated += '#';
          hasChanged = true;
        } else if (seat === '#' && occupied >= 4) {
          updated += 'L';
          hasChanged = true;
        } else {
          updated += seat;
        }
      });

      updatedSeats.push(updated);
    });

    this.seats = updatedSeats;

    return hasChanged;
  }

  getOccupiedSeats() {
    let occupied = 0;
    this.seats.forEach((line) => {
      [...line].forEach((seat) => {
        if (seat === '#') occupied++;
      });
    });
    return occupied;
  }

  display() {
    this.seats.forEach((line) => console.log(line));
  }
}

const s1 = new Seating(lines);

while (s1.nextState1()) {
  // s1.display();
}

console.log(s1.getOccupiedSeats());

const s2 = new Seating(lines);

while (s2.nextState2()) {
  // s2.display();
}

console.log(s2.getOccupiedSeats());
