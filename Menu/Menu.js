import React, { Component } from "react";
import "./Menu.css";

class City extends Component {
  render() {
    return (
      <div class="col-lg-3 menu ">
        <div class="frame hide">
          <div class="center">
            <div class="menu-icon">
              <div class="line-1 no-animation" />
              <div class="line-2 no-animation" />
              <div class="line-3 no-animation" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default City;
