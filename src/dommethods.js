function createGridEvents(board) {
  for (let i = 0; i < board.children.length; i++) {
    board.children[i].addEventListener("click", (e) => {
      console.log(e.currentTarget.id);
      return e.currentTarget.id;
    });
  }
}

function createGridSquares(numSquares, board) {
  for (let i = 0; i < numSquares; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.id = i;
    gridSquare.className = "gridSquare";
    board.appendChild(gridSquare);
  }
}

export { createGridEvents, createGridSquares };
