import React, { Component } from 'react';
import './css/App.css';
import Creation from './components/Creation';
import Shop from './components/Shop';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      inventory: [],
      showShop: false,
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

  handleShowShop = () => {
    this.setState({
      showShop: !this.state.showShop,
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
        />
        {this.state.showShop ? <Shop id={this.state.id} /> : null}
      </div>
    );
  }
}
