import axios from 'axios';
import React, { Component } from 'react';
import searchIcon from './search.webp';
import resetIcon from './reset.webp';

export default class FilterItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      minCost: 0,
      maxCost: 0,
      displaySearch: false,
    };
  }

  handleTurnOnSearch = () => {
    this.setState({
      displaySearch: !this.state.displaySearch,
    });
  };

  handleSearch = (input, queryName) => {
    axios
      .get(`/api/items?${queryName}=${input}`)
      .then((res) => {
        this.props.handleFilterItems(res.data);
      })
      .catch((err) => console.log(err));
  };

  handleResetSearch = (params) => {
    axios
      .get('/api/items')
      .then((res) => {
        this.props.handleFilterItems(res.data);
      })
      .catch((err) => console.log(err));
  };

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleMinCostInput = (e) => {
    this.setState({
      minCost: e.target.value,
    });
  };

  handleMaxCostInput = (e) => {
    this.setState({
      maxCost: e.target.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.displaySearch ? (
          <div className="search-bar">
            <button
              onClick={() => {
                this.handleResetSearch();
                this.handleTurnOnSearch();
              }}
            >
              Turn off Search
            </button>
            <div>
              <input
                type="text"
                placeholder="Search by Name"
                onChange={this.handleUserInput}
              />
              <button
                onClick={() => {
                  this.handleSearch(this.state.userInput, 'name');
                  this.handleTurnOnSearch();
                }}
              >
                Search
              </button>
            </div>
            <div>
              <input
                type="number"
                placeholder="minimum item price"
                onChange={this.handleMinCostInput}
              />
              <button
                onClick={() => {
                  this.handleSearch(+this.state.minCost, 'mincost');
                  this.handleTurnOnSearch();
                }}
              >
                Search
              </button>
            </div>
            <div>
              <input
                type="number"
                placeholder="maxium item price"
                onChange={this.handleMaxCostInput}
              />
              <button
                onClick={() => {
                  this.handleSearch(+this.state.maxCost, 'maxcost');
                  this.handleTurnOnSearch();
                }}
              >
                Search
              </button>
            </div>
          </div>
        ) : (
          <>
            <button onClick={this.handleTurnOnSearch} className="search-icon">
              <img src={searchIcon} alt="search" height={20} />
            </button>
            <button onClick={this.handleResetSearch} className="search-icon">
              <img src={resetIcon} alt="reset" height={20} />
            </button>
          </>
        )}
      </div>
    );
  }
}
