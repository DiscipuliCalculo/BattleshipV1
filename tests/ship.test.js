const Ship = require("../src/factories.js");

const Battleship = new Ship(5);

test("Check correct ship length", () => {
  expect(Battleship.length).toBe(5);
});

test("Check if hitbox created properly", () => {
  expect(Battleship.hitbox).toEqual([0, 0, 0, 0, 0]);
});

test("Check if hit function works correctly", () => {
  expect(Battleship.hitbox).toEqual([0, 0, 0, "hit", 0]);
});
