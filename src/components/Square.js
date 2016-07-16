import React from 'react';
import { connect } from 'react-redux';

import { clickSquare } from '../actions/gameActions';

const getState = (state) => {
  // might be a bit expensive?
  // TODO: refactor to get state once in parent (Board) and pass down grid status
  return {
    board: state.game.board
  };
};

@connect(getState, {clickSquare}, null, {withRef: true})
export default class Square extends React.Component {
  constructor(props) {
    super(props);

    this.statusClasses = {
      new: 'square-new',
      old: 'square-old',
      blank: 'square-blank'
    };

    this.state = {
      col: this.props.col,
      row: this.props.row,
      status: this.props.board.status
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.board[this.props.row][this.props.col] !== this.state.status) {
      this.setState({
        status: newProps.board[this.props.row][this.props.col].status
      });
    }
  }

  handleClick() {
    this.props.clickSquare(this.props.row, this.props.col);
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)} className={this.statusClasses[this.state.status]}>
      </div>
    );
  }
}
