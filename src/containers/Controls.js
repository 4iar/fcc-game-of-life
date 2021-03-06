import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { setBoard, generateBoard } from '../actions/gameActions';
import computeNextGeneration from '../utils/computeNextGeneration';
import generateRandomBoard from '../utils/generateRandomBoard';

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

    this.sizes = { 0: 20, 1: 40, 2: 80 };
    this.speeds = { 0: 1000, 1: 500, 2: 250 };

    this.state = {
      generation: 0,
      speed: 1,
      size: 1,
    };

    // randomise and start the board immediately
    this.props.setBoard(
      generateRandomBoard(this.sizes[this.state.size])
    );
    this.startSimulation();
  }

  handleSizeClick(size) {
    this.stopSimulation();
    this.setState({
        size,
        generation: 0
      }, () => {
        this.props.generateBoard(this.sizes[size]);
      }
    );
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

    this.intervalTimerId = setInterval(
      this.tickNextGeneration.bind(this),
      this.speeds[this.state.speed]
    );
  }

  resetSimulation() {
    this.stopSimulation();
    this.setState({
      generation: 0
    });
    this.props.generateBoard(this.sizes[this.state.size]);
  }

  stopSimulation() {
    clearInterval(this.intervalTimerId);
  }

  handleSpeedClick(speed) {
    this.setState({
      speed
    }, this.startSimulation);
  }

  render() {
    const size = this.state.size;
    const speed = this.state.speed;

    return(
      <div>
        <h1>{this.state.generation}</h1>
        <div id="controls-container">

          <section id="status">
            <button onClick={this.resetSimulation.bind(this)}>Reset</button>
            <button onClick={this.stopSimulation.bind(this)}>Pause</button>
            <button onClick={this.startSimulation.bind(this)}>Play</button>
          </section>

          <section id="dimensions">
            <button className={classNames({selected: size == 0})} onClick={this.handleSizeClick.bind(this, 0)}>Small</button>
            <button className={classNames({selected: size == 1})} onClick={this.handleSizeClick.bind(this, 1)}>Medium</button>
            <button className={classNames({selected: size == 2})} onClick={this.handleSizeClick.bind(this, 2)}>Large</button>
          </section>

          <section id="speed">
            <button className={classNames({selected: speed == 0})} onClick={this.handleSpeedClick.bind(this, 0)}>Slow</button>
            <button className={classNames({selected: speed == 1})} onClick={this.handleSpeedClick.bind(this, 1)}>Medium</button>
            <button className={classNames({selected: speed == 2})} onClick={this.handleSpeedClick.bind(this, 2)}>Fast</button>
          </section>
        </div>
      </div>
    );
  }
}
