export function clickSquare(row, col) {
  console.log("got click at " + row + ", " + col);
  return {
    type: 'SQUARE_CLICKED',
    row: row,
    col: col
  };
}
