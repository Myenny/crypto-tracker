import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <p class="logo">
          <img
            class="header-logo"
            src="https://pbs.twimg.com/profile_images/431316744355852288/xBvvg4q0_400x400.jpeg"
          />
        </p>
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
