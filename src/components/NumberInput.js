import React, { Component } from 'react';

export default class NumberInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: 0,
    };
  }

  handleUserInput = (e) => {
    this.setState({
      userInput: +e.target.value,
    });
  };

  render() {
    return (
      <>
        <h2>{this.props.name[0].toUpperCase() + this.props.name.slice(1)}</h2>
        <input
          type="number"
          min="0"
          max="20"
          value={this.state.userInput}
          onChange={this.handleUserInput}
        />
      </>
    );
  }
}
