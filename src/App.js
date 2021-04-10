import React, { Component } from 'react';
import './css/App.css';
import Creation from './components/Creation';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      inventory: [],
    };
  }

  render() {
    return (
      <div className="app">
        <Creation />
      </div>
    );
  }
}
