import axios from 'axios';
import React, { Component } from 'react';

export default class Inventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.id !== this.props.id) {
      axios
        .get(`/api/characters/${this.props.id}`)
        .then((res) => {
          this.setState({
            inventory: res.data[0].inventory,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    console.log(this.state);
    return <div className="Inventory"></div>;
  }
}
