// also NEW ARRAY
function operate(row) {
  return slide(combine(slide(row)));
}

// making new array
function slide(row) {
  let filtered = row.filter(val => val);
  return Array(4 - filtered.length).fill(0).concat(filtered);
}

// also NEW ARRAY
// not quite pure functional though
function combine(row) {
  return row.reverse().map((x, i) => {
    if (x == row[i+1]) {
      row[i+1] = 0;
      return x*2;
    } else return x;
  }).reverse();
}

function isGameWon() {
  return grid.some(row => row.includes(2048));
}

//nothing is zero & no rows change after operating in both directions
function isGameOver() {
  return (
    !grid.some(row => row.includes(0)) &&
    grid.every(row => operate(row).every((item, x) => item == row[x])) &&
    transposeGrid(grid, 1).every(row => operate(row).every((item, x) => item == row[x]))
  );
}
