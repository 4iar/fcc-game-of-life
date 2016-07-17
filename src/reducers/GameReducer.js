import initialState from './initialState';

export default function fuelSavingsReducer(state = initialState.game, action) {
  let newState;

  switch (action.type) {
    case "SQUARE_CLICKED": {

      //TODO: clean up this
      newState = Object.assign({}, state);
      let newBoard = state.board.slice();
      let squareStatus = state.board[action.row][action.col];

      if (squareStatus > 0) {
        squareStatus--;
      } else {
        squareStatus = 2;
      }

      newBoard[action.row][action.col] = squareStatus;
      newState.board = newBoard;
      return newState;
    }
    case "SET_BOARD": {
      return {...state,
        board: action.newBoard,
        size: action.newBoard.length
      };
    }
    default:
      return state;
  }
}
