function validateShipPlacement(selection, shipLength, direction, board) {
  if (direction === "horz") {
    let checkSelect = selection.toString();
    if (checkSelect.length === 2) {
      checkSelect = `${checkSelect[0]}9`;
    } else {
      checkSelect = "9";
    }
    checkSelect = Number(checkSelect);
    if (selection + shipLength > checkSelect) {
      return false;
    }
    for (let i = 0; i < shipLength; i++) {
      if (board.grid[selection + i].occupied !== "no") {
        return false;
      }
    }
    return true;
  }
  if (direction === "vert") {
    if (selection + shipLength > 99) {
      return false;
    }
    for (let i = 0; i < shipLength; i++) {
      if (board.grid[selection + (i * 10)].occupied !== "no") {
        return false;
      }
    }
    return true;
  }
}

function convertSelection(string) {
  const evalStr = string.toUpperCase();
  let str1Num;
  if (evalStr === undefined || evalStr.length !== 2 || typeof Number(evalStr[1]) !== "number") {
    return "invalid";
  }
  switch (evalStr[0]) {
    case "A":
      str1Num = 0;
      break;
    case "B":
      str1Num = 10;
      break;
    case "C":
      str1Num = 20;
      break;
    case "D":
      str1Num = 30;
      break;
    case "E":
      str1Num = 40;
      break;
    case "F":
      str1Num = 50;
      break;
    case "G":
      str1Num = 60;
      break;
    case "H":
      str1Num = 70;
      break;
    case "I":
      str1Num = 80;
      break;
    case "J":
      str1Num = 90;
      break;
    default:
      return false;
  }
  return str1Num + Number(evalStr[1]);
}

function validateAttack(selection, player) {
  if (player.legalAttacks.indexOf(selection) !== -1) {
    return true;
  }

  return false;
}

function randomNumber(range) {
  return Math.floor(Math.random() * range);
}

function directionSelect(num) {
  if (num === 0) {
    return "horz";
  }
  if (num === 1) {
    return "vert";
  }
}

export {
  convertSelection, directionSelect, randomNumber, validateAttack, validateShipPlacement,
};
