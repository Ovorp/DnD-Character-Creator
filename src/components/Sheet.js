import axios from 'axios';
import React, { Component } from 'react';
import './../css/sheet.css';
import Header from './Header';
import DisplayName from './Sheet/DisplayName';
import DisplayAbilityScore from './Sheet/DisplayAbilityScore';
import DisplayInventory from './Sheet/DisplayInventory';
import DisplayShop from './Sheet/DisplayShop';
import DisplayMods from './Sheet/DisplayMods';

export default class Sheet extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
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
          gold,
          inventory,
        } = res.data[0];

        this.setState({
          firstName,
          lastName,
          str: +str,
          dex: +dex,
          con: +con,
          int: +int,
          wis: +wis,
          cha: +cha,
          bio,
          avatar,
          id: +id,
          gold: +gold,
          inventory,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get('/api/items')
      .then((res) => {
        this.setState({
          shopItems: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <section className="sheet">
        <Header
          header={`Welcome adventurer ${this.state.firstName}${
            this.state.lastName ? ` ${this.state.lastName}.` : `.`
          }`}
        />
        <DisplayName name={this.state.firstName} title="First Name" />
        <DisplayName name={this.state.lastName} title="Last Name" />
        <img src={this.state.avatar} alt="avatar" />
        {this.props.abilityNames.map((val, i) => {
          return (
            <>
              <DisplayAbilityScore score={this.state[val]} scoreName={val} />
              <DisplayMods score={this.state[val]} scoreName={val} />
            </>
          );
        })}
        <article>{this.state.gold}</article>
        <article>{this.state.bio}</article>
        {this.state.inventory ? (
          <DisplayInventory inventory={this.state.inventory} />
        ) : null}
        {this.state.shopItems ? (
          <DisplayShop shopItems={this.state.shopItems} />
        ) : null}
        <button onClick={this.props.handleShowSheet}>Go Back!</button>
      </section>
    );
  }
}
