import React from 'react';
import { connect } from 'react-redux';

import { setBoard, generateBoard } from '../actions/gameActions';
import computeNextGeneration from '../utils/computeNextGeneration';

import '../styles/controls.scss';

const getState = (state) => {
  return {
    board: state.game.board,
  };
};

@connect(getState, {setBoard, generateBoard}, null, {withRef: true})
export default class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.intervalTimerId = 0;

    this.state = {
      generation: 0
    };
  }

  handleSizeClick(size) {
    const sizes = {
      0: 20,
      1: 40,
      2: 80
    };

    this.props.generateBoard(sizes[size]);
  }

  tickNextGeneration() {
    const newBoard = computeNextGeneration(this.props.board);
    this.props.setBoard(newBoard);

    this.setState({
      generation: this.state.generation + 1
    });
  }

  startSimulation() {
    this.stopSimulation();
    this.intervalTimerId = setInterval(this.tickNextGeneration.bind(this), 500);
  }

  stopSimulation() {
    clearInterval(this.intervalTimerId);
  }

  render() {
    return(
      <div id="controls-container">
        <section id="status">
          <button onClick={this.stopSimulation.bind(this)}>Stop</button>
          <button onClick={this.startSimulation.bind(this)}>PlayPause</button>
          {this.state.generation}
        </section>

        <section id="dimensions">
          <button onClick={this.handleSizeClick.bind(this, 0)}>Small</button>
          <button onClick={this.handleSizeClick.bind(this, 1)}>Medium</button>
          <button onClick={this.handleSizeClick.bind(this, 2)}>Large</button>
        </section>

        <section id="speed">
          <button>Slow</button>
          <button>Medium</button>
          <button>Fast</button>
        </section>
      </div>
    );
  }
}
