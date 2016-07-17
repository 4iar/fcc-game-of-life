import _ from 'lodash';

export default function computeNextFunction(board) {
  let newBoard = _.cloneDeep(board);  // FUCK YOU 2D ARRAY
  
  for (let row = 0; row < board.length; row++){
    for (let col = 0; col < board.length; col++){
      let neighbours = getNeighbourCount(board, row, col);
      
      if (board[row][col]) {
        if (neighbours > 3) {
          newBoard[row][col] = 0;
        } else if (neighbours == 2 || neighbours == 3) {
          newBoard[row][col] = 1;
        } else if (neighbours < 2 ) {
          newBoard[row][col] = 0;
        }
      } else if (neighbours == 3 && !board[row][col]) {
        newBoard[row][col] = 2;
      }
    }
  }

  return newBoard;
}

function getNeighbourCount(board, row, col) {
  let neighbours = 0;

  for (let rowRelative = -1; rowRelative < 2; rowRelative++){
    for (let colRelative = -1; colRelative < 2; colRelative++) {
      let newRow = row + rowRelative;
      let newCol = col + colRelative;
      
      if (!(colRelative == 0 && rowRelative == 0)) {
        if (board[newRow] && board[newRow][newCol]) {
          neighbours += 1;
        }
      }
    }
  }

  return neighbours;
}
