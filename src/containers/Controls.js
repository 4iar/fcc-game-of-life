import React from 'react';

import '../styles/controls.scss';


export default class Controls extends React.Component {
  render() {
    return(
      <div id="controls-container">
        <section id="status">
          <button>Stop</button>
          <button>PlayPause</button>
          [50]
        </section>

        <section id="dimensions">
          <button>Small</button>
          <button>Medium</button>
          <button>Large</button>
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
