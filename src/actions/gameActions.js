export function clickSquare(row, col) {
  return {
    type: 'SQUARE_CLICKED',
    row: row,
    col: col
  };
}

export function generateBoard(size) {
  let newBoard = [];
  const newSquareStatus = 0;

  for (let row = 0; row < size; row++) {
    newBoard.push(Array(size).fill(newSquareStatus));
  }

  return {
    type: 'SET_BOARD',
    newBoard: newBoard
  };
}

export function setBoard(newBoard) {
  return {
    type: 'SET_BOARD',
    newBoard: newBoard
  };
}
