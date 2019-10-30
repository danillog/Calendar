import React, { Component } from "react";
import "./TimeChange.css";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class City extends Component {
  render() {
    return (
      <div class="dates">
        <button class="btn btn-outline-secondary botton-date">Hoje</button>
        <button
          type="button"
          class="btn btn-outline-secondary btn-sm btn-right"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button type="button" class="btn btn-outline-secondary btn-sm btn-left">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  }
}

export default City;
