const sizeControl = document.querySelector("#size-control");
const sizeLabel = document.querySelector(".size-label");
const board = document.querySelector("#board");
const DEFAULT_GRID_SIZE = 16;
let size = DEFAULT_GRID_SIZE;

let randomColors = false;
let eraser = false;

buildBoard(size);

const setGridSize = document.querySelector(".set-size");
const resetButton = document.querySelector(".reset");
const eraseButton = document.querySelector(".erase");
const randomButton = document.querySelector(".random");

// Functions
function getSize() {
  return sizeControl.value;
}

function buildBoard(size) {
  for (let i = 0; i < size; i++) {
    const row = buildRow(size);
    board.appendChild(row);
  }
}

function buildRow(size) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.height = board.offsetHeight / size + "px";
    cell.style.width = board.offsetWidth / size + "px";
    cell.style.border = "1px solid hsl(0 0% 61% / 21%)";
    cell.style.backgroundColor = "white";
    row.appendChild(cell);
  }

  return row;
}

function handleReset() {
  board.innerHTML = "";
  size = getSize();
  randomColors = false;
  eraser = false;
  return buildBoard(size);
}

function colorCell() {
  let colorMode = eraser
    ? "white"
    : randomColors
      ? `hsl(${Math.random() * 360} 50% 50%)`
      : "hsl(191 55% 20%)";
  return colorMode;
}

function toggleEraser() {
  eraser = !eraser;
  randomColors = false;
  return null;
}

function toggleRandom() {
  randomColors = !randomColors;
  eraser = false;
  return null;
}

// Event Listeners
sizeControl.addEventListener("input", () => {
  sizeLabel.textContent = `${getSize()}x${getSize()}`;
  handleReset();
});

board.addEventListener("mouseover", (e) => {
  if (e.target.id != "board") {
    e.target.style.backgroundColor = colorCell();
  }
});

resetButton.addEventListener("click", handleReset);
eraseButton.addEventListener("click", toggleEraser);
randomButton.addEventListener("click", toggleRandom);

document.addEventListener("DOMContentLoaded", () => {
  sizeControl.value = 16;
  sizeLabel.textContent = `${getSize()}x${getSize()}`;
});
