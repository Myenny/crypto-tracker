import React, { Component } from "react";
import Coin from "./Coin";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = { coins: [] };
  }

  componentDidMount() {
    setInterval(() => {
      const url = "https://api.coinmarketcap.com/v2/ticker/?limit=200";
      fetch(url)
        .then(response => response.json())
        .then(Coin => {
          this.setState({
            coins: Object.values(Coin.data)
          });
        });
    }, 1000);
  }

  render() {
    let coins = this.state.coins.map(coin => {
      return (
        <Coin key={coin.id} name={coin.name} price={coin.quotes.USD.price} />
      );
    });

    return <ul>{coins}</ul>;
  }
}

export default Table;
