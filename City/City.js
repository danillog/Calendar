import React, { Component } from "react";
import "./styles.css";

class City extends Component {
  render() {
    return (
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          Dourados
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          Ponta Porã
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          Campo Grande
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          Três Lagoas
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          São Paulo
        </a>
      </div>
    );
  }
}

export default City;
