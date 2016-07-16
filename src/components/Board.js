import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import Square from './Square';
import { generateBoard } from '../actions/gameActions';

import '../styles/board.scss';

const getState = (state) => {
  // might be a bit expensive?
  // TODO: refactor to get state once in parent (Board) and pass down grid status
  return {
    size: state.game.size
  };
};

@connect(getState, {generateBoard}, null, {withRef: true})
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.props.generateBoard(4);
    this.state = {
      size: this.props.size
    };
    this.props.generateBoard(this.state.size);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      size: this.props.size
    });
    
    if (newProps.size !== this.state.size) {
    }
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
                    <Square key={[row, col]} row={row} col={col} />
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
    console.log("board sizes: " + this.state.size);
    const b = this.generateBoard(this.state.size); // bit expensive?
    return b;
  }
}
