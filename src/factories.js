const _ = require("lodash");

function Ship(name, length) {
  return {
    name,
    length,
    hitbox: new Array(length).fill(0),
    hit(num) {
      this.hitbox[num] = "hit";
    },
    isSunk() {
      if (this.hitbox.every((e) => e === "hit")) {
        return true;
      }

      return false;
    },
  };
}

function Gridsquare() {
  this.occupied = "no",
  this.hit = "no";
}

function Gameboard() {
  return {
    grid: [],
    shipNumber: 0,
    expandGrid() {
      for (let i = 0; i < 100; i++) {
        this.grid.push(new Gridsquare());
      }
    },
    placeShip(firstSquare, ship, direction) {
      if (direction === "horz") {
        for (let i = 0; i < ship.length; i++) {
          this.grid[firstSquare + i].occupied = {
            name: ship.name,
            hitIndex: i,
          };
        }
      } else if (direction === "vert") {
        for (let i = 0; i < ship.length; i++) {
          this.grid[firstSquare + (i * 10)].occupied = {
            name: ship.name,
            hitIndex: i,
          };
        }
      }
      this.shipNumber += 1;
    },
    receiveAttack(num) {
      this.grid[num].hit = "yes";
    },
    removeShip(ship) {
      if (ship.isSunk()) {
        this.shipNumber -= 1;
      }
    },
    allSunk() {
      if (this.shipNumber === 0) {
        return true;
      }
    },
  };
}

function Player() {
  return {
    Attack(num, board) {
      board.receiveAttack(num);
      this.legalAttacks.splice(num, 1);
    },
    legalAttacks: _.range(100),
    selectNumber() {
      return Math.floor(Math.random() * this.legalAttacks.length);
    },
  };
}

export {
  Ship, Player, Gameboard, Gridsquare,
};
