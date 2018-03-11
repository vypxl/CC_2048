let grid;
let score = 0;

function setup() {
  createCanvas(400, 400);
  noLoop();
  grid = addNumber(addNumber(blankGrid()));
  textAlign(CENTER, CENTER);
  strokeWeight(4);
  updateCanvas();
}

// One "move"
function keyPressed() {
  let past = copyGrid(grid);
  switch (keyCode) {
    case DOWN_ARROW:
      grid = grid.map(operate);
      break;
    case UP_ARROW:
      grid = flipGrid(
        flipGrid(grid).map(operate)
      );
      break;
    case RIGHT_ARROW:
      grid = transposeGrid(
        transposeGrid(grid).map(operate)
      );
      break;
    case LEFT_ARROW:
      grid = transposeGrid(flipGrid(
        flipGrid(transposeGrid(grid)).map(operate)
      ));
      break;
    default:
  }
  if (compare(past, grid)) grid = addNumber(grid);
  updateCanvas();
  if (isGameOver()) console.log("GAME OVER");
  if (isGameWon())  console.log("GAME WON");
}

function updateCanvas() {
  background(255);
  drawGrid();
  select('#score').html(score);
}

function drawGrid() {
  let w = 100
  grid.forEach((row, x) => row.forEach((v, y) => {
      fill(colorsSizes[v] ? colorsSizes[v].color : 255);
      rect(x * w, y * w, w, w, 30);
      fill(0);
      textSize(colorsSizes[v] ? colorsSizes[v].size : 18);
      if(v != 0) text(v, x * w + w / 2, y * w + w / 2);
  }));
}
