import React, { Component } from 'react';
import axios from 'axios';
import './../css/shop.css';
import Header from './Header';

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
          const {
            firstName,
            lastName,
            str,
            dex,
            con,
            int,
            wis,
            cha,
            bio,
            avatar,
            id,
          } = res.data[0];
          this.setState({
            firstName,
            lastName,
            str,
            dex,
            con,
            int,
            wis,
            cha,
            bio,
            avatar,
            id,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="shop">
        <Header header={`Shop`} />
        <h1>{this.state.id}</h1>
        <h1>{this.state.lastName}</h1>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}
