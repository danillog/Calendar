import React, { Component } from "react";
import "./ShowView.css";


class City extends Component {
  render() {
    return (
      <div class="show-view exibe">
            <h6> Modo de exibição </h6>
            <div class="modify-view">
              <form class="form-inline">
                <select
                  class="custom-select my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                >
                  <option value="1">Dia</option>
                  <option selected value="2">
                    Semana
                  </option>
                  <option value="3">Mês</option>
                </select>
              </form>
            </div>
          </div>
    );
  }
}

export default City;
