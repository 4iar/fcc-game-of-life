import React from 'react';

import '../styles/square.scss';


export default class Square extends React.Component {
  constructor(props) {
    super(props);

    this.statusClasses = {
      2: 'square-new',
      1: 'square-old',
      0: 'square-dead'
    };

    this.state = {
      row: this.props.row,
      col: this.props.col,
      status: this.props.status
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.status !== this.state.status) {
      this.setState({
        status: newProps.status
      });
    }
  }
  
  render() {
    return (
      <div onClick={this.props.handleClick.bind(this)} className={this.statusClasses[this.state.status] + ' square'}>
      </div>
    );
  }
}
