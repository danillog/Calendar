import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import SmallCalendar from "./SmallCalendar/SmallCalendar";
import Calendario from "./Calendario/calendario";
import City from "./City/City";
import Menu from "./Menu/Menu"
import TimeChange from "./TimeChange/TimeChange"

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  render() {
    return (
      <div class="container-fluid">
        <div class="row title justify-content-around  head">
          <div class="col-lg-2">
            <Menu />
          </div> 
          <div class="col-lg-2">
           <TimeChange />
          </div>

          <div class="col-lg-2 exibe">
            <h6>Outubro de 2019</h6>
          </div>
          <div class="col-lg-2 hide">
            <h6> Usuario: Dangomes </h6>{" "}
          </div>
          <div class="col-lg-2 show-view exibe">
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
        </div>

        <div class="row content">
          <div class="col-lg-3 cp">
            <div class="row justify-content-around">
              {" "}
              <SmallCalendar />{" "}
            </div>
            <div class="row justify-content-around">
              {" "}
              <City />{" "}
            </div>
          </div>
          <div class="col-lg cg">
            <h3> cg</h3>
            <Calendario />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
