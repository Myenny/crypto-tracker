import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Table from "./Table.js";
import Coin from "./Coin.js";
import Footer from "./Footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Table />
        <Footer />
      </div>
    );
  }
}

export default App;
