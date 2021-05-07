function blankGrid() {
  return Array(4).fill().map(() => Array(4).fill(0));
  }

function compare(a, b) {
  return !a.every((row, x) => row.every((item, y) => item == b[x][y]));
}

//slice() copies an array
function copyGrid(grid) {
  return grid.slice().map(row => row.slice());
}

function flipGrid(grid) {
  return grid.map(row => row.reverse());
}

//found this on stackoverflow, its so clever!
//why direction? both cases do the same..
function transposeGrid(grid) {
  return grid[0].map((_, c) => grid.map(r => r[c]));
}

//also not the purest, but better than nested for loops..
function addNumber(grid) {
  let options = [].concat.apply([], grid.map((row, x) => row.map((v, y) => Object.assign({x:x, y:y, v:v})))).filter(v => v.v == 0);
  if (options.length < 1) return grid;
  let r = random(options);
  let newGrid = copyGrid(grid);
  newGrid[r.x][r.y] = random() > 0.1 ? 2 : 4;
  return newGrid;
}
