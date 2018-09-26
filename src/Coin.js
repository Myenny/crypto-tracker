import React, { Component } from "react";
import App from "./App.js";

class Coin extends Component {
  state = {};
  render() {
    return (
      <li>
        <img
          src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${
            this.props.id
          }.png`}
        />
        {this.props.name} ${this.props.price}
      </li>
    );
  }
}

export default Coin;
