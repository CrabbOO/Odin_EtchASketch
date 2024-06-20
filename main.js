const sizeControl = document.querySelector("#size-control");
const sizeLabel = document.querySelector(".size-label");
const board = document.querySelector("#board");
const DEFAULT_GRID_SIZE = 16;
let size = DEFAULT_GRID_SIZE;

buildBoard(size);

const setGridSize = document.querySelector(".set-size");
const resetButton = document.querySelector(".reset");

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
    row.appendChild(cell);
  }

  return row;
}

function handleReset() {
  board.innerHTML = "";
  size = getSize();
  return buildBoard(size);
}

// Event Listeners
sizeControl.addEventListener("input", () => {
  sizeLabel.textContent = `${getSize()}x${getSize()}`;
  handleReset();
});
board.addEventListener("mouseover", (e) => {
  if (e.target.id != "board") {
    e.target.style.backgroundColor = "hsl(191 55% 20%)";
  }
});
resetButton.addEventListener("click", handleReset);
document.addEventListener("DOMContentLoaded", () => {
  sizeControl.value = 16;
  sizeLabel.textContent = `${getSize()}x${getSize()}`;
});
