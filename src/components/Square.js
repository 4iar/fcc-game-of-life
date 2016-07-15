import React from 'react';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      col: this.props.col,
      row: this.props.row
    };
  }

  render() {
    return (
    <div>
    </div>
    );
  }
}
