import _ from 'lodash';


export default function computeNextFunction(board) {
  board = board.slice();

  _.range(1,50).forEach(() => {
    let col = _.random(0,79);
    let row = _.random(0,79);
    board[col][row] = _.sample([0, 1, 2]);
  })

  return board;
}
