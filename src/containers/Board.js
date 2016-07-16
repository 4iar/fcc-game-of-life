import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import Square from '../components/Square';
import { generateBoard, clickSquare } from '../actions/gameActions';

import '../styles/board.scss';

const getState = (state) => {
  return {
    board: state.game.board,
    size: state.game.size
  };
};

@connect(getState, {generateBoard, clickSquare}, null, {withRef: true})
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.size,
      board: this.props.board
    };
    this.props.generateBoard(this.state.size);
  }

  componentWillReceiveProps(newProps) {
    //TODO: check for prop change
    if (!_.isEqual(this.state.board, newProps.board)) {
      this.setState({
        board: newProps.board
      });
    }
  }

  handleClick(row, col) {
    console.log("got a call in board handleclick: - " + row + ", " + col)
    this.props.clickSquare(row, col);
  }

  generateBoard(size) {
    // TODO: distinguish between number of cells (size) and dimensions (boardSize);
    const boardSize = 80;
    const boardRelativeSize = boardSize/size;

    const board = (
      <div className="board">
        {_.range(0, size).map((row) => {
          return (
            <div key={row} className="row" style={{width: boardSize + 'vh'}}>
              {_.range(0, size).map((col) => {
                return (
                  <div key={[row, col]} className="item" style={{height: boardRelativeSize+ 'vh'}}>
                    <Square handleClick={this.handleClick.bind(this, row, col)} status={this.state.board[row][col]} key={[row, col]} row={row} col={col} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );

    return board;
  }

  render() {
    // placeholderish
    console.log("rerendered");
    const b = this.generateBoard(this.state.board.length); // bit expensive?
    return b;
  }
}
