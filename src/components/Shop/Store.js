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

  render() {
    return (
      <div className="store">
        <h3>Welcome to the store</h3>
        <ul>
          {this.state.storeItems.map((val) => {
            return (
              <li key={val.id}>
                {val.name} <button>Add to Inventory</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
