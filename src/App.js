import React, { Component } from 'react';
import './css/App.css';
import Creation from './components/Creation';
import Shop from './components/Shop';
import Sheet from './components/Sheet';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.abilityNames = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

    this.state = {
      id: 0,
      inventory: [],
      showShop: false,
      showSheet: false,
    };
  }

  handleUpdateId = (id) => {
    this.setState({ id: id });
  };

  handleUpdateInventory = (params) => {};

  handleShowShopToFalse = () => {
    this.setState({
      showShop: false,
    });
  };

  handleShowSheetToFalse = () => {
    this.setState({
      showShop: false,
    });
  };

  handleShowShop = () => {
    this.setState({
      showShop: !this.state.showShop,
    });
  };

  handleShowSheet = () => {
    this.setState({
      showSheet: !this.state.showSheet,
    });
  };

  render() {
    return (
      <div className="app">
        <Creation
          handleUpdateId={this.handleUpdateId}
          handleShowShop={this.handleShowShop}
          handleShowShopToFalse={this.handleShowShopToFalse}
          showShop={this.state.showShop}
          abilityNames={this.abilityNames}
        />
        {this.state.showShop ? (
          <Shop
            id={this.state.id}
            handleShowSheet={this.handleShowSheet}
            showSheet={this.state.showSheet}
          />
        ) : null}
        {this.state.showSheet ? (
          <Sheet id={this.state.id} abilityNames={this.abilityNames} />
        ) : null}
      </div>
    );
  }
}
