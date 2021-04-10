import React, { Component } from 'react';
import Header from './Header';
import NameInput from './NameInput';
import NumberInput from './NumberInput';

export default class Creation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      bio: '',
      avatar: '',
    };
  }

  render() {
    return (
      <div className="creation">
        <Header header={`Create Your Own D&D 5E Character`} />
        <NameInput name="firstName" />
        <NameInput name="lastName" />
        <NumberInput name="str" />
        <NumberInput name="dex" />
        <NumberInput name="con" />
        <NumberInput name="int" />
        <NumberInput name="wis" />
        <NumberInput name="cha" />
        <textarea className="bio" />
      </div>
    );
  }
}
