import initialState from './initialState';

export default function fuelSavingsReducer(state = initialState.game, action) {
  let newState;

  switch (action.type) {
    case "SQUARE_CLICKED":
      newState = Object.assign({}, state);
      let squareStatus = state.board[action.row][action.col].status;

      // TODO: make less ugly
      if (squareStatus === 'new') {
        newState.board[action.row][action.col].status = 'old';
        return newState;
      } else if (squareStatus === 'old') {
        newState.board[action.row][action.col].status = 'blank';
        return newState;
      } else {
        newState.board[action.row][action.col].status = 'new';
        return newState;
      }
    default:
      return state;
  }
}
