import React from 'react';

import Board from './Board';
import Controls from './Controls';

import '../styles/game-page.scss';

export default class GamePage extends React.Component {
  render() {
    return (
      <div className="game">
        <Board className="ax"/>
        <Controls />
      </div>
    );
  }
}
