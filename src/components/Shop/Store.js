import axios from 'axios';
import React, { Component } from 'react';

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storeItems: [],
    };
  }

  componentDidMount = () => {
    axios
      .get('/api/items')
      .then((res) => {
        this.setState({
          storeItems: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidUpdate = (prevProp, prevState) => {
    if (
      prevProp.filterItemListFromSearch !== this.props.filterItemListFromSearch
    )
      this.setState({ storeItems: this.props.filterItemListFromSearch });
  };

  handleUpdateStore = (item) => {
    const filteredStoreItems = this.state.storeItems.filter(
      (val) => val.id !== item.id
    );
    this.setState({
      storeItems: filteredStoreItems,
    });
  };

  render() {
    return (
      <div className="store">
        <ul>
          {this.state.storeItems.map((val) => {
            return (
              <li key={val.id}>
                <div className="store-cost">
                  {val.name}
                  <p>cost: {val.cost}</p>
                </div>
                <button
                  onClick={() => {
                    this.props.handleAddItemToInventory(val);
                    this.handleUpdateStore(val);
                  }}
                >
                  Add to Inventory
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
