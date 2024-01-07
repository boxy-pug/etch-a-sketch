// boardsize
const defaultSize = 16;
let boardSize = getNewSize() || defaultSize;

// queryselectors
const gameContainer = document.querySelector("#board");
const resetButton = document.querySelector("#reset-button");
const resizeButton = document.querySelector("#resize-button");

// event listeners
resetButton.addEventListener("click", clearDrawing);
resizeButton.addEventListener("click", function () {
  boardSize = getNewSize();
  makeBoard(boardSize);
  draw();
});

// functions
// Making the board
function makeBoard(boardSize) {
  gameContainer.innerHTML = "";
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

// Get size from user
function getNewSize() {
  let newSize = prompt("What size do you want?", defaultSize);
  return parseInt(newSize);
  defaultSize;
}

// Clearing board
function clearDrawing() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "";
  });
}

// A function that makes the drawing board
// should take a number as a parameter, default is 16x16
