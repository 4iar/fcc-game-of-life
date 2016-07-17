import _ from 'lodash';

export default function generateRandomBoard(size) {
  let newBoard = [];
  
  for (let row = 0; row < size; row++) {
    newBoard.push(Array(size).fill(_.sample([0, 1, 2])));
  }

  return newBoard;
}
