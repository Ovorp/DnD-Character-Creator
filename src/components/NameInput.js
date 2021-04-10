import React, { Component } from 'react';

export default class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };
  }

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    let title = this.props.name[0].toUpperCase() + this.props.name.slice(1);
    title = title.split('N').join(' N');

    return (
      <>
        <h2>{title}</h2>
        <input onChange={this.handleUserInput} />
      </>
    );
  }
}
