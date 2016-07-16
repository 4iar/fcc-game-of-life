import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import Square from './Square';
import { generateBoard } from '../actions/gameActions';

import '../styles/board.scss';

@connect(null, {generateBoard}, null, {withRef: true})
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.props.generateBoard(4);
    this.state = {
      size: 10
    };
  }

  generateBoard(size) {
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
    const b = this.generateBoard(4); // bit expensive?
    return b;
  }
}
