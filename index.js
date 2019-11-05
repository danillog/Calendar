import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import SmallCalendar from "./SmallCalendar/SmallCalendar";
import Calendario from "./Calendario/calendario";
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

dateChange = () =>{
  const response =  time
  this.setState({ date : response.data.hits })
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

          <div class="col-lg-3 exibe">
            <TimeNow />
          </div>
          
          <div class="col-lg-2">
            <ShowView />
          </div>
        </div>

        <div class="row content">
          <div class="col-lg-2 cp">
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
