import React, { Component } from 'react';
import axios from 'axios';
import '../css/creation.css';
import Header from './Header';
import NameInput from './NameInput';
import NumberInput from './NumberInput';
import Avatar from './Avatar';
import DefaultChar from './DefaultChar';

export default class Creation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      str: '',
      dex: '',
      con: '',
      int: '',
      wis: '',
      cha: '',
      bio: '',
      avatar: '',
      id: 0,
    };
  }

  handleUpdateUserInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpdateUserInputNumbers = (e) => {
    this.setState({
      [e.target.name]: +e.target.value,
    });
  };

  handleDefaultChar = (obj) => {
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
    } = obj;

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
    });
  };

  handleSubmitCharSheet = () => {
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
    } = this.state;

    if (id > 0) {
      axios
        .put(`/api/characters/${this.state.id}`, {
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
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post('/api/characters', {
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
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="creation">
        <Header header={`Create Your Own D&D 5E Character`} />
        <div className="stats-creation">
          <NameInput
            name="firstName"
            value={this.state.firstName}
            handleUpdateUserInput={this.handleUpdateUserInput}
          />
          <NameInput
            name="lastName"
            value={this.state.lastName}
            handleUpdateUserInput={this.handleUpdateUserInput}
          />
          <NumberInput
            name="str"
            value={this.state.str}
            handleUpdateUserInput={this.handleUpdateUserInputNumbers}
          />
          <NumberInput
            name="dex"
            value={this.state.dex}
            handleUpdateUserInput={this.handleUpdateUserInputNumbers}
          />
          <NumberInput
            name="con"
            value={this.state.con}
            handleUpdateUserInput={this.handleUpdateUserInputNumbers}
          />
          <NumberInput
            name="int"
            value={this.state.int}
            handleUpdateUserInput={this.handleUpdateUserInputNumbers}
          />
          <NumberInput
            name="wis"
            value={this.state.wis}
            handleUpdateUserInput={this.handleUpdateUserInputNumbers}
          />
          <NumberInput
            name="cha"
            value={this.state.cha}
            handleUpdateUserInput={this.handleUpdateUserInputNumbers}
          />
          <textarea
            className="bio"
            name="bio"
            value={this.state.bio}
            onChange={this.handleUpdateUserInput}
          />
        </div>
        <Avatar
          name="avatar"
          handleUpdateUserInput={this.handleUpdateUserInput}
        />
        {this.state.avatar ? (
          <img
            src={this.state.avatar}
            alt="Avatar"
            className="avatar-creation"
          />
        ) : null}
        <DefaultChar handleDefaultChar={this.handleDefaultChar} />
        <button className="doneBTN" onClick={this.handleSubmitCharSheet}>
          Done!
        </button>
      </div>
    );
  }
}
