import React from 'react';
import { connect } from 'react-redux';

import { clickSquare } from '../actions/gameActions';

import '../styles/square.scss';

const getBoard = (state) => {
  // might be a bit expensive?
  // TODO: refactor to get state once in parent (Board) and pass down grid status
  return {
    board: state.game.board
  };
};

@connect(getBoard, {clickSquare}, null, {withRef: true})
export default class Square extends React.Component {
  constructor(props) {
    super(props);

    this.statusClasses = {
      new: 'square-new',
      old: 'square-old',
      dead: 'square-dead'
    };

    this.state = {
      row: this.props.row,
      col: this.props.col,
      status: this.props.board[this.props.row][this.props.col].status
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
      <div onClick={this.handleClick.bind(this)} className={this.statusClasses[this.state.status] + ' square'}>
        {this.props.test}
      </div>
    );
  }
}
