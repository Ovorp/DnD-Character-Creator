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
                {val.name}
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
