import { Ship, Player, Gameboard } from "./factories";
import { createGridEvents, createGridSquares } from "./dommethods";
import {
  convertSelection, directionSelect, randomNumber, validateShipPlacement, validateAttack,
} from "./logic";

const Gameboard1 = new Gameboard();
const Gameboard2 = new Gameboard();
const boards = document.getElementsByClassName("board");
const cpuPlayer = new Player();
const humanPlayer = new Player();
const shipList = [
  { name: "Patrol Boat", length: 2 },
  { name: "Submarine", length: 3 },
  { name: "Cruiser", length: 3 },
  { name: "Battleship", length: 4 },
  { name: "Carrier", length: 5 },
];

Gameboard1.expandGrid();
Gameboard2.expandGrid();

for (let i = 0; i < shipList.length; i++) {
  let cpuSelect = randomNumber(99);
  let direction = directionSelect(randomNumber(2));
  while (validateShipPlacement(cpuSelect, shipList[i].length, direction, Gameboard1) === false) {
    cpuSelect = randomNumber(99);
    direction = directionSelect(randomNumber(2));
  }
  Gameboard1.placeShip(cpuSelect, new Ship(shipList[i].name, shipList[i].length), direction);
}

createGridSquares(100, boards[1]);
// createGridEvents(boards[1]);

for (let i = 0; i < shipList.length; i++) {
  let direction = window.prompt("Choose an orientation for your ship (horz or vert)");
  let userInput = window.prompt("Choose a spot for your ship");
  console.log(typeof convertSelection(userInput));
  while (validateShipPlacement(convertSelection(userInput), shipList[i].length, direction, Gameboard2) === false) {
    direction = window.prompt("Choose an orientation for your ship horz or vert");
    userInput = window.prompt("Choose a spot for your ship");
  }
  const finalInput = convertSelection(userInput);
  Gameboard2.placeShip(finalInput, new Ship(shipList[i].name, shipList[i].length), direction);
}

console.log(Gameboard2);
