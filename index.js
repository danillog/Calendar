import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import SmallCalendar from "./SmallCalendar/SmallCalendar";
import BigCalendar from "./BigCalendar/BigCalendar";
import City from "./City/City";
import Menu from "./Menu/Menu";
import TimeChange from "./TimeChange/TimeChange";
import TimeNow from "./TimeNow/TimeNow";
import ShowView from "./ShowView/ShowView";

class App extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date(),
      city: ""
    };
  }

  onClickCalendar(dateSmall) {
    this.setState({ date: dateSmall });
  }

  onClickCity(selectCity) {
    this.setState({ city: selectCity });
  }

  render() {
   
    return (
      <div class="container-fluid">
        <div class="row title justify-content-around  head">
          <div class="col-lg-3">
            <TimeNow newTime={this.state.date} />
            <h6>{this.state.city} </h6>
          </div>
        </div>

        <div class="row content">
          <div class="col-lg-2 cp">
            <div class="row justify-content-around">
              {" "}
              <SmallCalendar clickCalendar={this.onClickCalendar.bind(this)} />
            </div>
            <div class="row justify-content-around">
              {" "}
              <City clickCity={this.onClickCity.bind(this)} />
            </div>
          </div>
          <div class="col-lg cg">
            <BigCalendar newTime={this.state.date} />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
