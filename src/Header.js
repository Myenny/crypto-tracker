import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <p className="logo" />
        <nav>
          <ul>
            <li>
              <a href="https://github.com/" target="_blank">
                Coin Tracker
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
