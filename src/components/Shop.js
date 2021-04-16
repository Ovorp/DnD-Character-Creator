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

  componentDidMount = () => {
    this.setState({
      id: +this.props.id,
    });
  };

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
        <div className="test">
          <div>
            <h2 className="gold">{this.state.gold}</h2>
            <h2>{this.state.lastName}</h2>
            <h2>{this.state.firstName}</h2>
            <Inventory
              id={this.state.id}
              inventory={this.state.inventory}
              handleDeleteFromInventory={this.handleDeleteFromInventory}
            />
          </div>
          <Store handleAddItemToInventory={this.handleAddItemToInventory} />
        </div>
        <button onClick={this.props.handleShowSheet}>Done Shopping!</button>
        <h4>{this.props.showSheet ? 'Scroll Down' : ''}</h4>
      </div>
    );
  }
}
