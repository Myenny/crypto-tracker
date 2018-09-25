import React, { Component } from "react";
import Coins from "./Coins.json";
import Coin from "./Coin";

class Table extends Component {
  state = {};
  render() {
    let coins = Object.keys(Coins.data).map(id => {
      let coin = Coins.data[id];

      return <Coin name={coin.name} price={coin.quotes.USD.price} />;
    });

    return <ul>{coins}</ul>;
  }
}

export default Table;
