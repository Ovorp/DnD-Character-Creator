import React, { Component } from 'react';
import axios from 'axios';
import './../css/shop.css';
import Header from './Header';
import Store from './Shop/Store';
import Inventory from './Shop/Inventory';
import FilterItems from './Shop/FilterItems';

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
    const totalGold = this.state.gold - item.cost;

    this.setState({
      inventory: addedInventory,
      gold: totalGold,
    });
    axios
      .put(`/api/characters/additems/${this.state.id}`, item)
      .then()
      .catch((err) => {
        console.log(err);
      });

    axios
      .put(`/api/characters/${this.state.id}`, { gold: totalGold })
      .then()
      .catch();

    axios.delete(`/api/items/${item.id}`).then().catch();
  };

  handleFilterItems = (itemArr) => {
    const newItemArr = itemArr;
    this.setState({
      filterShopList: [...newItemArr],
    });
  };

  render() {
    return (
      <div className="shop">
        <Header header="Shop" />
        <h2 className="gold">Gold:{this.state.gold}</h2>
        <div className="shop-main">
          <div>
            <h3>
              {this.state.firstName}
              {this.state.lastName ? ` ${this.state.lastName}'s` : `'s`}{' '}
              Inventory
            </h3>
            <Inventory
              className="inventory"
              id={this.state.id}
              inventory={this.state.inventory}
              handleDeleteFromInventory={this.handleDeleteFromInventory}
            />
            <button onClick={this.props.handleShowShop}>Go Back!</button>
          </div>
          <div>
            <div className="store-container">
              <h3>Welcome to the store</h3>
              <FilterItems handleFilterItems={this.handleFilterItems} />
            </div>
            <Store
              handleAddItemToInventory={this.handleAddItemToInventory}
              filterItemListFromSearch={this.state.filterShopList}
            />
            <button onClick={this.props.handleShowSheet}>Done Shopping!</button>{' '}
          </div>
        </div>

        <h4>{this.props.showSheet ? 'Scroll Down' : ''}</h4>
      </div>
    );
  }
}
