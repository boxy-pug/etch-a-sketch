const boardSize = 16;
const gameContainer = document.querySelector("#board");

function makeBoard(boardSize) {
  gameContainer.style.setProperty("--pixels-per-row", boardSize);
  let totalSize = boardSize * boardSize;
  for (let i = 1; i <= totalSize; i++) {
    let eachPixel = document.createElement("div");
    eachPixel.classList.add("pixel");
    gameContainer.appendChild(eachPixel);
  }
}

makeBoard(boardSize);

function draw() {}

// A function that makes the drawing board
// should take a number as a parameter, default is 16x16
