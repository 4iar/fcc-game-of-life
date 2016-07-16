import React from 'react';
import { connect } from 'react-redux';

import { generateBoard } from '../actions/gameActions';

import '../styles/controls.scss';


@connect(null, {generateBoard}, null, {withRef: true})
export default class Controls extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleSizeClick(size) {
    const sizes = {
      0: 20,
      1: 40,
      2: 80
    }
    
    console.log(sizes[size])
    this.props.generateBoard(sizes[size]);
  }
  
  render() {
    return(
      <div id="controls-container">
        <section id="status">
          <button>Stop</button>
          <button>PlayPause</button>
          [50]
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
