import React, { Component } from "react";
import App from "./App.js";

class Coin extends Component {
  state = {};
  render() {
    return (
      <li>
        {this.props.name} ${this.props.price}
      </li>
    );
  }
}

export default Coin;
