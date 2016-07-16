import initialState from './initialState';

export default function fuelSavingsReducer(state = initialState.game, action) {
  let newState;
  
  switch (action.type) {
    case "SQUARE_CLICKED":
      //TODO: clean up this
      newState = Object.assign({}, state);
      let newBoard = Object.assign({}, state.board);
      let squareStatus = state.board[action.row][action.col].status;

      // TODO: make less ugly
      if (squareStatus === 'new') {
        squareStatus = 'old';
      } else if (squareStatus === 'old') {
        squareStatus = 'dead';
      } else if (squareStatus === 'dead') {
        squareStatus = 'new';
      }

      console.log(squareStatus);
      newBoard[action.row][action.col] = {
        ...newBoard[action.row][action.row],
        status: squareStatus};
      newState.board = newBoard;
      return newState;
    case "SET_BOARD":
      console.log("got a call to set board: ");
      return {...state,
        board: action.newBoard
      }
    default:
      return state;
  }
}
