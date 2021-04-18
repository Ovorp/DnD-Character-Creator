import React, { Component } from 'react';
import axios from 'axios';
import './../css/shop.css';
import Header from './Header';
import Store from './Shop/Store';
import Inventory from './Shop/Inventory';

// firstName,
//  lastName,
//  str,
//  dex,
//  con,
//  int,
//  wis,
//  cha,
//  bio,
//  avatar,
//  id,
//  gold,

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
    };
  }

  // pulls the ID from the App component into this one and sets the id in state.

  componentDidMount = () => {
    this.setState({
      id: +this.props.id,
    });
  };

  // if the id in the app state changes the state in this component updates

  componentDidUpdate = (prevProp, prevState) => {
    if (prevProp.id !== this.props.id) {
      this.setState({
        id: +this.props.id,
      });
    }

    if (prevState.id !== this.state.id) {
      axios
        .get(`/api/characters/${this.props.id}`)
        .then((res) => {
          const { firstName, lastName, id, gold, inventory } = res.data[0];
          this.setState({
            firstName,
            lastName,
            id,
            gold,
            inventory,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleDeleteFromInventory = (itemId) => {
    axios
      .delete(`/api/characters/deleteitems/${this.state.id}/${itemId}`)
      .then()
      .catch();
    const newInventory = this.state.inventory.filter(
      (val) => val.id !== itemId
    );
    this.setState({
      inventory: newInventory,
    });
  };

  handleAddItemToInventory = (item) => {
    const addedInventory = [...this.state.inventory, item];

    this.setState({
      inventory: addedInventory,
    });
    axios
      .put(`/api/characters/additems/${this.state.id}`, item)
      .then()
      .catch((err) => {
        console.log(err);
      });

    axios.delete(`/api/items/${item.id}`).then().catch();
  };

  render() {
    return (
      <div className="shop">
        <Header header="Shop" />
        <h2 className="gold">Gold:{this.state.gold}</h2>
        <div className="shop-main">
          <div>
            <h3>
              {this.state.lastName} {this.state.firstName} Inventory
            </h3>
            <Inventory
              className="inventory"
              id={this.state.id}
              inventory={this.state.inventory}
              handleDeleteFromInventory={this.handleDeleteFromInventory}
            />
          </div>
          <div>
            <h3>Welcome to the store</h3>
            <Store handleAddItemToInventory={this.handleAddItemToInventory} />
          </div>
        </div>
        <button onClick={this.props.handleShowShop}>Go Back!</button>
        <button onClick={this.props.handleShowSheet}>Done Shopping!</button>
        <h4>{this.props.showSheet ? 'Scroll Down' : ''}</h4>
      </div>
    );
  }
}
