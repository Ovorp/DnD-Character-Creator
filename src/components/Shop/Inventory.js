import React, { Component } from 'react';

export default class Inventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.inventory !== this.props.inventory) {
      this.setState({
        inventory: this.props.inventory,
      });
    }
  };

  render() {
    return (
      <div className="Inventory">
        <ul>
          {this.state.inventory.length > 0
            ? this.state.inventory.map((val, i) => {
                return (
                  <li key={(val.id, i)} value={val.id}>
                    {val.name}
                    <button
                      onClick={() =>
                        this.props.handleDeleteFromInventory(val.id)
                      }
                    >
                      X
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}
