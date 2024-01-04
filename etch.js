const boardSize = 16;
// = document.querySelector("#number-input");
const gameContainer = document.querySelector("#board");

// Making the board
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

// Drawing functionality
function draw() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "black";
    });
  });
}

draw();

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", clearDrawing);

// Clearing board
function clearDrawing() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "";
  });
}

// A function that makes the drawing board
// should take a number as a parameter, default is 16x16
