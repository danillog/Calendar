import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import SmallCalendar from "./SmallCalendar/SmallCalendar";
import BigCalendar from "./BigCalendar/BigCalendar";
import City from "./City/City";
import Menu from "./Menu/Menu"
import TimeChange from "./TimeChange/TimeChange"
import TimeNow from "./TimeNow/TimeNow"
import ShowView from "./ShowView/ShowView"


class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "React",
      date: new Date()
    };
  }

onClickCalendar(dateSmall){
  this.setState({ date : dateSmall })
}

  render() {
    return (
      <div class="container-fluid">
        <div class="row title justify-content-around  head">
          <div class="col-lg-3 exibe">
            <TimeNow newTime={this.state.date} />
          </div>
        </div>

        <div class="row content">
          <div class="col-lg-2 cp">
            <div class="row justify-content-around">
              {" "}
              <SmallCalendar clickCalendar={this.onClickCalendar.bind(this)}   />
            </div>
            <div class="row justify-content-around">
              {" "}
              <City />{" "}
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
