import React, { Component } from 'react';
import axios from 'axios';

export default class DefaultChar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charSheets: [],
    };
  }

  componentDidMount = () => {
    axios
      .get('/api/characters')
      .then((res) => {
        this.setState({
          charSheets: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <select
        className="default"
        onChange={(e) => {
          if (e.target.value !== 'false') {
            this.props.handleDefaultChar(this.state.charSheets[e.target.value]);
          } else {
            this.props.handleDefaultChar({
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
            });
          }
          axios
            .get('api/characters')
            .then((res) => {
              this.setState({
                charSheets: res.data,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <option value={false}>Select a default Character</option>
        <option value={0}>Turtle</option>
        <option value={1}>Elf</option>
        <option value={2}>Teifling</option>
        <option value={3}>Human</option>
      </select>
    );
  }
}
